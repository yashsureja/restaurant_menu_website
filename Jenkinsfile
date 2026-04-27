pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                echo 'Cloning repository...'
                git 'https://github.com/yashsureja/restaurant_menu_website.git'
            }
        }

        stage('Build') {
            steps {
                echo 'No build needed for HTML project'
            }
        }

        stage('Test') {
            steps {
                echo 'Checking if index.html exists'
                sh 'ls -l'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Running Docker Container'
                sh 'docker build -t menu-app .'
                sh 'docker stop menu || true'
                sh 'docker rm menu || true'
                sh 'docker run -d -p 8085:80 --name menu menu-app'
            }
        }
    }
}
