import pymongo
from pymongo import MongoClient

client = MongoClient('mongodb://localhost/jobslist')


db = client.jobslist

jobs = db.jobs.find()

html_content = jobs.text

for tr in jobs.find_all[7]:
    tds=tr.find_all('td')
    print("value:%s,value 2:%s,value 3:%s, value 4:%s,value 5:%s, value 6:%s, value 7:%s, value 8:%s" \
    (tds[0].text,tds[1].text,tds[2].text,tds[3].text,tds[4].text,tds[5].text,tds[6].text,tds[7].text, ))
