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
                bat 'echo Building Website'
            }
        }

        stage('Deploy to XAMPP') {
            steps {
                bat 'if not exist C:\\xampp\\htdocs\\restaurant\\website mkdir C:\\xampp\\htdocs\\restaurant\\website'
                bat 'xcopy /E /Y * C:\\xampp\\htdocs\\restaurant\\website\\'
            }
        }

        stage('Success') {
            steps {
                echo 'Website Successfully Deployed to XAMPP'
            }
        }
    }
}
