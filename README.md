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

[![api](https://img.shields.io/badge/API-092E20?style=for-the-badge&logo=django&logoColor=white)](https://github.com/Umbreella/unicat_backend)

### Environment variables

* To run the application, you should overwrite **[.env](.env)** file

### Docker

* docker-compose.yml

```
version: "3"

services:
  unicat_frontend:
    image: umbreella/unicat_frontend:latest
    ports:
      - [your_open_port]:3000
    env_file:
      - [path_to_env_file]
```

* Docker-compose run

```
docker-compose up -d
```

## Endpoints

* Main

```
[your_ip_address]/
```

* Admin panel

```
[your_ip_address]/admin/
```
<iframe src="https://giphy.com/embed/qgQUggAC3Pfv687qPC" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dommespace-domme-space-programador-qgQUggAC3Pfv687qPC">via GIPHY</a></p>