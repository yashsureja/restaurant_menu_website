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
                bat 'if exist C:\\xampp\\htdocs\\restaurant\\website rmdir /S /Q C:\\xampp\\htdocs\\restaurant\\website'
                bat 'mkdir C:\\xampp\\htdocs\\restaurant\\website'
                bat 'xcopy "%WORKSPACE%\\*" "C:\\xampp\\htdocs\\restaurant\\website\\" /E /H /C /I /Y'
            }
        }

        stage('Success') {
            steps {
                echo 'Website Updated Successfully'
            }
        }
    }
}