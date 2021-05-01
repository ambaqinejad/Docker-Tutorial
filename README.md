# Docker Tutorial
#### For running an stopped container
1. Search for it            docker ps -a
2. Start it                 docker start containerName/containerId

#### Attach and Detach Mode
0. start in attach mode                  docker start -a containerName/containerId
1. docker attach containerName/containerId
2. docker logs containerName/containerId
3. docker logs  -f containerName/containerId             keeps running  follow mode

#### Removing container
*docker rm containerName/containerId
*docker rm containerName/containerId containerName/containerId containerName/containerId containerName/containerId
*docker container prune               to remove all stopped containers


#### Removing images
*image that is depend on stopped or started container can not be removed
*docker rmi imageName/imageId
*docker rmi imageName/imageId imageName/imageId imageName/imageId imageName/imageId
*docker image prune               to remove all images        
