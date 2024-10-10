# Export PhaserJS Project To Android APK
You can export your PhaserJS project to native Android using Flutter. This guide consist of 2 parts: PhaserJS section and Flutter section.

## I. PhaserJS Section
<p>
1. You need javascript runtime installed on your system. <a href="https://bun.sh">Bun</a> is great choice.<br>
Linux : <code>curl -fsSL https://bun.sh/install | bash</code><br>
Windows : <code>powershell -c "irm bun.sh/install.ps1 | iex"</code><br>
2. Make sure Bun is installed correctly. run:
<code>bun --version</code><br>
3. Clone this repository: <code>git clone github.com/arifdata/phaser-android-game</code><br>
4. Change dir into newly cloned repository: <code>cd phaser-android-game</code><br>
5. Install the dependency: <code>bun install</code><br>
6. Build the project: <code>bun run build</code>. This will bundle your project into the "dist" folder. Remember this folder, we're gonna need it later. Now we're moving to the Flutter section.
</p>

## II. Flutter Section
<p>
1.  You need Flutter tools installed on your system. Follow the installation guide <a href="https://docs.flutter.dev/get-started/install">here</a> based on your operating system.<br>
2. After done installing Flutter. Clone this other repository: <code>git clone github.com/arifdata/flutter_phaser</code><br>
3. Change dir into newly cloned repository: <code>cd flutter_phaser</code><br>
4. Install the dependency: <code>flutter pub get</code><br>
5. Copy all the content of "dist" folder from step 6 previous section into the "assets" folder so the project structure looks like this:<br>
<pre>
flutter_phaser
|
├── analysis_options.yaml
├── android/...
├── assets
│   ├── assets
│   │   ├── phaser3-logo.png
│   │   └── index-b7e0519e.js
│   └── index.html
├── flutter_phaser.iml
├── ios/...
├── lib
│   └── main.dart
├── linux/...
├── macos/...
├── pubspec.lock
├── pubspec.yaml
├── README.md
├── web/...
└── windows/...
</pre>
6. Build the apk: <code>flutter build apk --split-per-abi</code><br>
7. The apk files generated inside folder "build/app/outputs/flutter-apk".<br>
8. Enjoy.
</p>


