pipeline {
    agent none 
    environment {
        docker_user = "kcodd3"
    }
    stages {
        stage('Publish') {
            agent {
                kubernetes {
                    inheritFrom 'agent-template'
                }
            }
            steps{
                container('docker') {
                    sh 'echo $DOCKER_TOKEN | docker login --username $DOCKER_USER --password-stdin'
                    sh 'cd webui; docker build -t $DOCKER_USER/webui:$BUILD_NUMBER .'
                    sh 'docker push $DOCKER_USER/webui:$BUILD_NUMBER'
                }
            }
        }
        stage ('Deploy') {
            agent {
                node {
                    label 'deploy'
                }
            }
            steps {
                sshagent(credentials: ['cloudlab']) {
                    sh "sed -i 's/DOCKER_REGISTRY/${docker_user}/g' webui.yaml"
                    sh "sed -i 's/BUILD_NUMBER/${BUILD_NUMBER}/g' webui.yaml"
                    sh 'scp -r -v -o StrictHostKeyChecking=no *.yaml kcodd3@155.98.37.68:~/'
                    sh 'ssh -o StrictHostKeyChecking=no kcodd3@155.98.37.68 kubectl apply -f /users/kcodd3/webui.yaml -n jenkins'
                    sh 'ssh -o StrictHostKeyChecking=no kcodd3@155.98.37.68 kubectl apply -f /users/kcodd3/webui-service.yaml -n jenkins'                                        
                }
            }
        }
    }
}
