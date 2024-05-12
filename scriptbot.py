# Importing libraries 
import time 
import hashlib 
from urllib.request import urlopen, Request 
  
# setting the URL you want to monitor 
url = Request('https://bcsweb.is.berkeley.edu/psc/bcsprd/EMPLOYEE/SA/c/SSR_STUDENT_FL.SSR_MD_SP_FL.GBL?Action=U&MD=Y&GMenu=SSR_STUDENT_FL&GComp=SSR_START_PAGE_FL&GPage=SSR_START_PAGE_FL&scname=CS_SSR_MANAGE_CLASSES_NAV&AJAXTransfer=y&ICAJAXTrf=true&ICMDListSlideout=true&ucFrom=CalCentral&ucFromText=My%20Academics&ucFromLink=https%3A%2F%2Fcalcentral.berkeley.edu%2Facademics', headers={'User-Agent': 'Mozilla/5.0'}) 
  
# to perform a GET request and load the 
# content of the website and store it in a var 
response = urlopen(url).read() 
  
# to create the initial hash 
currentHash = hashlib.sha224(response).hexdigest() 
print("running") 
time.sleep(10) 
while True: 
    try: 
        # perform the get request and store it in a var 
        response = urlopen(url).read() 
  
        # create a hash 
        currentHash = hashlib.sha224(response).hexdigest() 
  
        # wait for 30 seconds 
        time.sleep(30) 
  
        # perform the get request 
        response = urlopen(url).read() 
  
        # create a new hash 
        newHash = hashlib.sha224(response).hexdigest() 
  
        # check if new hash is same as the previous hash 
        if newHash == currentHash: 
            continue
  
        # if something changed in the hashes 
        else: 
            # notify 
            print("something changed") 
  
            # again read the website 
            response = urlopen(url).read() 
  
            # create a hash 
            currentHash = hashlib.sha224(response).hexdigest() 
  
            # wait for 30 seconds 
            time.sleep(30) 
            continue
  
    # To handle exceptions 
    except Exception as e: 
        print("error") 




# Code Explanation
'''
1. The code starts by importing the libraries.
2. Then it sets up a URL to monitor and performs a GET request on that website.
3. The response is then stored in a variable called response.
4. Next, the hash of the response is created with the help of hashlib and stored in currentHash.
5. Next, time is set to sleep for 10 seconds before continuing while looping through an infinite loop which will continue until something changes or there’s an exception.
6. If anything changes, it will be printed out as well as another GET request performed on the website again after 30 seconds has passed without any change happening to either hashes (the first one or second one).
7. The code is a Python script that monitors an URL for changes and notifies the user if there is one.
8. The code first imports libraries needed to perform the desired task.
9. It then sets up the URL to monitor, which will be www.geeksforgeeks.org Next, it performs a GET request on the website and stores it in a variable called response.
10. The code then creates an initial hash using sha224(response).hexdigest().
11. Next, it sleeps for 10 seconds before iterating through the loop again with urlopen(url).read() being performed every 30 seconds.
12. If something changed in the hashes of currentHash and newHash, then print(“something changed”) is done to notify that something has changed.
'''
