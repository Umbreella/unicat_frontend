# Online academy "Unicat" (WebUI)

![html5](https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![css3](https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![bootstrap](https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![jss](https://img.shields.io/badge/jss-F7DF1E?style=for-the-badge&logo=jss&logoColor=white)
![react](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![apollographql](https://img.shields.io/badge/apollographql-311C87?style=for-the-badge&logo=apollographql&logoColor=white)
![docker](https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

The web interface of the online academy "unicat", which interacts with the
Unicat Web-API.

* GraphQL is used to get data
* REST-Api is used to manage data

## Getting Started

### Dependencies

[![api](https://img.shields.io/badge/Unicat_APi-092E20?style=for-the-badge&logo=django&logoColor=white)](https://github.com/Umbreella/unicat_backend)

* Clone project

```git
git clone https://github.com/Umbreella/unicat_frontend.git
```

* Set values in **[.env](.env)**

* Create **nginx.conf**

```
server {
    listen 80;

    location / {
        root /usr/share/nginx/html ;
        index index.html index.htm ;
        try_files $uri /index.html = 404 ;
    }
}
```

* Build and run Docker

```yaml
version: "3"

services:
  frontend-unicat:
    build: .
    image: [ your_image_name ]
    ports:
      - [ your_open_port ]:80
    volumes:
      - [ path_to_nginx.conf ]:/etc/nginx/conf.d/default.conf
```

## Endpoints

* Main

```jsonpath
[your_ip_address]/
```

* Admin panel

```jsonpath
[your_ip_address]/admin/
```

## Live Demo

* [https://unicat.umbreella-dev.ru/](https://unicat.umbreella-dev.ru/)
