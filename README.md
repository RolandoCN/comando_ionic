ionic start app blank --type=angular
cd app
npm install @ionic/angular@8.3.0
npm list @ionic/angular
npm install @capacitor/android
npm install @ionic/storage
npm install @ionic/storage-angular
npm install @angular/common --save

ionic generate page pages/app-login --no-spec
ionic generate service services/servicios-api
