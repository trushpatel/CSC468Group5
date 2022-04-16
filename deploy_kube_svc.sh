cd
bash /local/repository/launch_network.sh
kubectl get nodes

cd
kubectl create deployment registry --image=registry
kubectl expose deploy/registry --port=5000 --type=NodePort
kubectl get svc

kubectl patch service registry --type='json' --patch='[{"op": "replace", "path": "/spec/ports/0/nodePort", "value":30000}]'
kubectl get svc

docker pull busybox
docker tag busybox 127.0.0.1:30000/busybox
docker push 127.0.0.1:30000/busybox
curl 127.0.0.1:30000/v2/_catalog

git clone https://github.com/trushpatel/CSC468Group5.git
cd ~/CSC468Group5
docker-compose -f docker-compose.images.yml build
docker-compose -f docker-compose.images.yml push
curl 127.0.0.1:30000/v2/_catalog
for SERVICE in webui postgres ; do kubectl create deployment $SERVICE --image=127.0.0.1:30000/$SERVICE:v0.1; done
kubectl expose deploy/webui --type=NodePort --port=80
kubectl get svc
#then go to the port for webui on the cloudlab headnode url
