pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                echo 'Code Pulled from GitHub'
            }
        }

        stage('Build') {
            steps {
                bat 'docker build -t restaurant-menu .'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker stop restaurant || exit 0'
                bat 'docker rm restaurant || exit 0'
                bat 'docker run -d -p 8085:80 --name restaurant restaurant-menu'
            }
        }

        stage('Success') {
            steps {
                echo 'Project Successfully Deployed'
            }
        }
    }
}
