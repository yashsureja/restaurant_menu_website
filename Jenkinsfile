pipeline {
      agent any
      environment {
          HTDOCS_PATH = "C:\\xampp\\htdocs\\Restaurant_Menu_Website"
      }
      stages {
          stage('Checkout') {
              steps { checkout scm }
          }
          stage('Lint HTML') {
              steps {
                  bat '''
                      @echo off
                      set MISSING=0
                      for %%f in (index.html menu.html about.html contact.html) do
  (
                          if not exist %%f (
                              echo MISSING: %%f
                              set MISSING=1
                          ) else (
                              echo Found: %%f
                          )
                      )
                      if %MISSING%==1 exit /b 1
                      echo All HTML present.
                  '''
              }
          }
          stage('Deploy to XAMPP') {
              steps {
                  bat """
                      @echo off
                      if not exist "%HTDOCS_PATH%" mkdir "%HTDOCS_PATH%"
                      xcopy /E /Y /I . "%HTDOCS_PATH%"
                      echo Site at http://localhost/Restaurant_Menu_Website/
                  """
              }
          }
          stage('Verify Deployment') {
              steps {
                  bat """
                      @echo off
                      set MISSING=0
                      for %%f in (index.html menu.html about.html contact.html) do
  (
                          if not exist "%HTDOCS_PATH%\\%%f" (
                              echo MISSING in htdocs: %%f
                              set MISSING=1
                          ) else (
                              echo Verified: %%f
                          )
                      )
                      if %MISSING%==1 exit /b 1
                      echo All deployed.
                  """
              }
          }
      }
      post {
          success { echo "Visit http://localhost/Restaurant_Menu_Website/" }
          failure { echo "Pipeline FAILED." }
          always  { echo "Pipeline finished." }
      }
  }
