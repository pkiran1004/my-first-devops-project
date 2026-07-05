pipeline {
    agent any

    stages {

        stage('Check Docker') {
            steps {
                bat 'docker --version'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t my-first-devops-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker stop myapp || exit 0'
            }
        }

        stage('Remove Old Container') {
            steps {
                bat 'docker rm myapp || exit 0'
            }
        }

        stage('Run New Container') {
            steps {
                bat 'docker run -d -p 3000:3000 --name myapp my-first-devops-app'
            }
        }

    }

    post {
        success {
            echo 'Application deployed successfully!'
        }

        failure {
            echo 'Pipeline failed.'
        }
    }
}