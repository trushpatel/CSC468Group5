pipeline {
    agent none 
//     environment {
//         registry = "kcodd3/webchess"
//         docker_user = "kcodd3"
//         docker_app = "webchess"
//     }
    stages {
//         stage('Build') {
//             agent {
//                 kubernetes {
//                     inheritFrom 'agent-template'
//                 }
//             }
//             steps {
//                 container('webui') {
//                     // Create our project directory.
//                     sh 'cd ${GOPATH}/src'
//                     sh 'mkdir -p ${GOPATH}/src/hello-world'
//                     // Copy all files in our Jenkins workspace to our project directory.                
//                     sh 'cp -r ${WORKSPACE}/* ${GOPATH}/src/hello-world'
//                     // Build the app.
//                     sh 'export GO111MODULE=auto; go build'  
//                 }
//             }     
//         }
//         stage('Publish') {
//             agent {
//                 kubernetes {
//                     inheritFrom 'agent-template'
//                 }
//             }
//             steps{
//                 container('docker') {
//                     sh 'echo $DOCKER_TOKEN | docker login --username $DOCKER_USER --password-stdin'
//                     sh 'docker build -t $DOCKER_REGISTRY:$BUILD_NUMBER .'
//                     sh 'docker push $DOCKER_REGISTRY:$BUILD_NUMBER'
//                 }
//             }
//         }
        stage ('Deploy') {
            agent {
                node {
                    label 'deploy'
                }
            }
            steps {
                sshagent(credentials: ['cloudlab']) {
                 
                    sh 'ssh -o StrictHostKeyChecking=no kcodd3@155.98.38.244 cd'
//                     sh 'ssh -o StrictHostKeyChecking=no kcodd3@155.98.38.244 kubectl create deployment registry --image=registry'
//                     sh 'ssh -o StrictHostKeyChecking=no kcodd3@155.98.38.244 kubectl expose deploy/registry --port=5000 --type=NodePort'
                    sh 'ssh -o StrictHostKeyChecking=no kcodd3@155.98.38.244 kubectl get svc'

//                     sh 'ssh -o StrictHostKeyChecking=no kcodd3@155.98.38.244 kubectl patch service registry --type=\'json\' --patch=\'[{\"op\": \"replace\", \"path\": \"/spec/ports/0/nodePort\", \"value\":30000}]\''
//                     sh 'ssh -o StrictHostKeyChecking=no kcodd3@155.98.38.244 kubectl get svc'

//                     sh 'ssh -o StrictHostKeyChecking=no kcodd3@155.98.38.244 docker pull busybox'
//                     sh 'ssh -o StrictHostKeyChecking=no kcodd3@155.98.38.244 docker tag busybox 127.0.0.1:46233/busybox'
//                     sh 'ssh -o StrictHostKeyChecking=no kcodd3@155.98.38.244 docker push 127.0.0.1:46233/busybox'
//                     sh 'ssh -o StrictHostKeyChecking=no kcodd3@155.98.38.244 curl 127.0.0.1:46233/v2/_catalog'

//                     sh 'ssh -o StrictHostKeyChecking=no kcodd3@155.98.38.244 git clone https://github.com/trushpatel/CSC468Group5.git'
//                     sh 'ssh -o StrictHostKeyChecking=no kcodd3@155.98.38.244 cd CSC468Group5'
//                     sh 'ssh -o StrictHostKeyChecking=no kcodd3@155.98.38.244 docker-compose -f CSC468Group5/docker-compose.images.yml build'
                    sh 'ssh -o StrictHostKeyChecking=no kcodd3@155.98.38.244 docker-compose -f CSC468Group5/docker-compose.images.yml push'
                    sh 'ssh -o StrictHostKeyChecking=no kcodd3@155.98.38.244 curl 127.0.0.1:46233/v2/_catalog'
                    sh 'ssh -o StrictHostKeyChecking=no kcodd3@155.98.38.244 for SERVICE in webui postgres ; do kubectl create deployment $SERVICE --image=127.0.0.1:46233/$SERVICE:v0.1; done'
                    sh 'ssh -o StrictHostKeyChecking=no kcodd3@155.98.38.244 kubectl expose deploy/webui --type=NodePort --port=80'
                    sh 'ssh -o StrictHostKeyChecking=no kcodd3@155.98.38.244 kubectl get svc'

//                     sh 'scp -r -v -o StrictHostKeyChecking=no *.yml kcodd3@155.98.38.244:~/'
//                     sh 'ssh -o StrictHostKeyChecking=no kcodd3@155.98.38.244 kubectl apply -f /users/kcodd3/webchess-service.yml -n jenkins'
//                     sh 'ssh -o StrictHostKeyChecking=no kcodd3@155.98.38.244 kubectl apply -f /users/kcodd3/webchess.yml -n jenkins'                                        
                }
            }
        }
    }
}
