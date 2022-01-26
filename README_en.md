[한국어](README.md) | English

------------

<br>

# ** Pictoon **

> This is a web project in which photos are synthesized by uploading two favorite photos.
 
## 1. Click the button to uplad the image i want to synthesize.
<p>
 <img width="80%" src="https://user-images.githubusercontent.com/80394582/151150189-2d541fc3-b3da-4af2-9d43-34fa3a262613.png"/>
 </p>
<br>

## 2. Wait a moment for the two uploaded images to be synthesized. (takes 3~5min)
<p>
 <img width="80%" src="https://user-images.githubusercontent.com/80394582/151151223-3f66478f-c94e-4d14-bdfc-8d61a06594c6.png"/>
 </p>
<br>

## 3. Result
<p>
 <img width="600" alt="스크린샷 2022-01-26 오후 8 07 39" src="https://user-images.githubusercontent.com/80394582/151152604-13c61abd-ebcc-4d3b-b0cd-be5f8807653d.png">
 </p>
<br>

---

# ** System Architecture **

<p align="center"> 
 <img width = 600 img src=https://user-images.githubusercontent.com/80394582/151169042-3b80c11f-d485-4676-bf66-e8681097f655.png>
</p>

<br>

# ** Tech Stack **
frontend|Backend|webserver
---|---|---|
React|Gunicorn|Nginx
.|Flask|.
.|Rabbitmq|.
.|S3|.
.|Redis|.
.|pytorch|.
.|Celery|.

<br>

# ** Ports **
 
#### Redis : 6379:6379
#### React : 3000:3000
#### RabbitMQ : 5672:5672, 15672:15672
#### flask : 5005:5005
#### Nginx : 80:80
 


---

<br>

# ** Start **
## local
```bat
git clone
docker-compose up
```
You can access this web-site on your localhost from now! <br>


---

# ** Member **

<img width = 600 img src="https://user-images.githubusercontent.com/80394582/151170824-1f5ecc46-f156-49c0-95ff-6b6bcc33ade6.png">