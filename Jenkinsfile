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
                    sh 'cd backend/files; docker build -t $DOCKER_USER/webui2:$BUILD_NUMBER .'
                    sh 'docker push $DOCKER_USER/webui2:$BUILD_NUMBER'
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
                    sh "sed -i 's/DOCKER_REGISTRY/${docker_user}/g' backend.yml"
                    sh "sed -i 's/BUILD_NUMBER/${BUILD_NUMBER}/g' backend.yml"
                    sh 'scp -r -v -o StrictHostKeyChecking=no *.yml kcodd3@155.98.37.68:~/'
                    sh 'ssh -o StrictHostKeyChecking=no kcodd3@155.98.37.68 kubectl apply -f /users/kcodd3/backend.yml -n jenkins'
                    sh 'ssh -o StrictHostKeyChecking=no kcodd3@155.98.37.68 kubectl apply -f /users/kcodd3/backend.yml -n jenkins'                                        
                }
            }
        }
    }
}
