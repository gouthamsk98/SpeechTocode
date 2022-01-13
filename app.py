import speech_recognition as s_r
import os
import dialogflow
import requests
from google.api_core.exceptions import InvalidArgument
DIALOGFLOW_PROJECT_ID = 'newagent-vvqg'
DIALOGFLOW_LANGUAGE_CODE = 'en-US'


DIALOGFLOW_PROJECT_ID = 'newagent-vvqg'
DIALOGFLOW_LANGUAGE_CODE = 'en-US'

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = 'newagent-vvqg-25afda824c05.json'

SESSION_ID = '102456480407174078689'

# count = 0


def my_function():
    r = s_r.Recognizer()
    # my device index is 1, you have to put your device index
    my_mic = s_r.Microphone(device_index=1)
    with my_mic as source:
        print("Speak!!!")
        # reduce noise
        # take voice input from the microphone
        audio = r.listen(source, phrase_time_limit=4)
    # print(r.recognize_google(audio)) #to print voice into text
    x = 1
    while (x == 1):
        try:
            text = r.recognize_google(audio)
            print("You said: {}".format(text))
            x = 0
        except:
            x = 1
            print("Sorry, we did not recognize your voice")
            with my_mic as source:
                print("Speak!!!")
                # reduce noise
                # take voice input from the
                audio = r.listen(source, phrase_time_limit=4)

    text_to_be_analyzed = r.recognize_google(audio)
    session_client = dialogflow.SessionsClient()
    session = session_client.session_path(DIALOGFLOW_PROJECT_ID, SESSION_ID)

    text_input = dialogflow.types.TextInput(
        text=text_to_be_analyzed, language_code=DIALOGFLOW_LANGUAGE_CODE)
    query_input = dialogflow.types.QueryInput(text=text_input)
    try:

        response = session_client.detect_intent(
            session=session, query_input=query_input)

    except InvalidArgument:
        raise
    result_1 = response.query_result.query_text.find('hardware')
    result_2 = response.query_result.query_text.find('wait')
    result_3 = response.query_result.query_text.find('condition')
    result_4 = response.query_result.query_text.find('loop')
    result_5 = response.query_result.query_text.find('repeat')
    result_6 = response.query_result.query_text.find('end')
    result_7 = response.query_result.query_text.find('minutes')
    result_8 = response.query_result.query_text.find('seconds')

    myobj = {'a': '0'}
    if (result_1 != -1):
        myobj = {'a': '1'}
        print(myobj['a'])
        # f = open("data.txt", "w")
        # requests.post('http://localhost:3001/testAPI', data=myobj)
    if (result_2 != -1):
        myobj = {'a': '2'}
        print(myobj['a'])
        # f = open("data.txt", "w")
        # f.write('2')
        # requests.post('http://localhost:3001/testAPI', data=myobj)
    # if (result_3 != -1):
    #     myobj = {'a': '3'}
    #     print(myobj['a'])
    if (result_7 != -1 and result_8 != -1):
        wait = "wait "+response.query_result.query_text
        myobj = {'a': wait}
        print("wait value======>"+myobj['a'])
        # f = open("data.txt", "w")
        # f.write('3')
        # requests.post('http://localhost:3001/testAPI', data=myobj)
    if (result_4 != -1):
        myobj = {'a': '4'}
        print(myobj['a'])
        # f = open("data.txt", "w")
        # f.write('3')
        # requests.post('http://localhost:3001/testAPI', data=myobj)
    if (result_5 != -1):
        myobj = {'a': '5'}
        print(myobj['a'])
        # f = open("data.txt", "w")y
        # f.write('3')
        # requests.post('http://localhost:3001/testAPI', data=myobj)
    if (result_6 != -1):
        myobj = {'a': '6'}
        print(myobj['a'])
        # f = open("data.txt", "w")
        # f.write('3')
        # requests.post('http://localhost:3001/testAPI', data=myobj)
    myobj_2 = {'a': response.query_result.fulfillment_text}
    # x = requests.post('http://localhost:3001/testAPI', data=myobj)
    # y = requests.post('http://localhost:3001/dialogflowAPI', data=myobj_2)
    # print(x.text)
    # print(y.text)
    print("Query text:", response.query_result.query_text)
    print("Detected intent:", response.query_result.intent.display_name)

    print("Detected intent confidence:",
          response.query_result.intent_detection_confidence)
    print("Fulfillment text:", response.query_result.fulfillment_text)
    return response.query_result.fulfillment_text


y = "null"
while True:
    y = my_function()
    # x = y.find('hardware')
    # pos = y.find('position')
    # y="hardware sm sm_1 1 position 10"
    # x = y.find('hardware')
    # pos = y.find('position')
    # if (x != -1):
    #     pos=int(y[pos+9:])
    #     if(pos !=-1):
    #         k="subh "+pos+"type "+
    # if(y == "hardware sm sm_1 1"):
    #     print("postion ===", (pos+9))
    if(y.find('hardware') != -1):
        myobj = {'a': y}
        my = {'a': 'new hardware added'}
        z1 = requests.post('http://localhost:3001/testAPI', data=myobj)
        z2 = requests.post('http://localhost:3001/dialogflowAPI', data=my)
        print(z1.text)
        print(z2.text)
    elif(y.find('loop') != -1):

        myobj = {'a': y}
        z = requests.post('http://localhost:3001/testAPI', data=myobj)
        my = {'a': 'new loop added'}
        z2 = requests.post('http://localhost:3001/dialogflowAPI', data=my)
        print(z2.text)
        print(z.text)
    elif(y.find('subh') != -1):

        x = y[5:y.find("type")]
        y = y.replace(x, "{} ")
        x = y.format(int(x)-1)
        y = x
        myobj = {'a': y}
        z = requests.post('http://localhost:3001/testAPI', data=myobj)
        print(z.text)

    elif(y.find('subw') != -1):
        x = y[5:y.find("type")]
        y = y.replace(x, "{} ")
        x = y.format(int(x)-1)
        y = x
        myobj = {'a': y}
        z = requests.post('http://localhost:3001/testAPI', data=myobj)
        print(z.text)

    elif(y.find('subl') != -1):

      #  y=y.replace("subl", "lsub")
        x = y[5:y.find("type")]
        y = y.replace(x, "{} ")
        x = y.format(int(x)-1)
        y = x

        myobj = {'a': y}
        z = requests.post('http://localhost:3001/testAPI', data=myobj)
        print(z.text)

    elif(y.find('subc') != -1):
        x = y[5:y.find("type")]
        y = y.replace(x, "{} ")
        x = y.format(int(x)-1)
        y = x
        myobj = {'a': y}
        z = requests.post('http://localhost:3001/testAPI', data=myobj)
        print(z.text)

    elif(y.find('csub') != -1):
        x = y[5:y.find("type")]
        y = y.replace(x, "{} ")
        x = y.format(int(x)-1)
        y = x
        myobj = {'a': y}
        z = requests.post('http://localhost:3001/testAPI', data=myobj)
        print(z.text)

    elif(y.find('lsub') != -1):
        x = y[5:y.find("type")]
        y = y.replace(x, "{} ")
        x = y.format(int(x)-1)
        y = x
        myobj = {'a': y}
        z = requests.post('http://localhost:3001/testAPI', data=myobj)
        print(z.text)
    elif(y.find('condn') != -1):
        myobj = {'a': y}
        z = requests.post('http://localhost:3001/testAPI', data=myobj)
        print(z.text)
        my = {'a': 'new condition added'}
        z2 = requests.post('http://localhost:3001/dialogflowAPI', data=my)
        print(z2.text)
    elif(y.find('wait') != -1):
        myobj = {'a': y}
        z = requests.post('http://localhost:3001/testAPI', data=myobj)
        print(z.text)
        my = {'a': 'new wait added'}
        z2 = requests.post('http://localhost:3001/dialogflowAPI', data=my)
        print(z2.text)
    elif(y.find('repeat') != -1):
        x = y[7:]
        myobj = {'a': x}
        z = requests.post('http://localhost:3001/testAPI', data=myobj)
        print(z.text)
        my = {'a':  'repeat added'}
        z2 = requests.post('http://localhost:3001/dialogflowAPI', data=my)
        print(z2.text)
    elif(y.find('stop') != -1 or y.find('end') != -1):
        x = y[4:]
        myobj = {'a': x}
        z = requests.post('http://localhost:3001/testAPI', data=myobj)
        print(z.text)
        my = {'a': 'end added'}
        z2 = requests.post('http://localhost:3001/dialogflowAPI', data=my)
        print(z2.text)
    # else:
    #     myobj = {'a': '0'}
    #     z = requests.post('http://localhost:3001/testAPI', data=myobj)
    #     print(z.text)

       # y = requests.post('http://localhost:3001/dialogflowAPI', data=myobj_2)
#     if(my_function() == "hardware
# "):
#         if(my_function() == "smile LED"):
#             if(my_function() == "smile LED 1"):
#                 if(my_function == "on"):
#                     y = "hardware 1"
#                 y = "hardware 0"


# print("hardware output ======>"+y)
