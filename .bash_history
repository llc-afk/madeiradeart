sudo apt update
sudo apt install flatpak
flatpak --user remote-add --if-not-exists flathub flathub.org
flatpak install flathub io.github.streetpea.Chiaki4deck
mkdir -p ~/.local/share/flatpak/repo
flatpak --user remote-add --if-not-exists flathub flathub.org
mkdir -p ~/.local/share/flatpak/repo
sudo apt clean
sudo apt update
sudo apt install flatpak
flatpak --user remote-add --if-not-exists flathub flathub.org
flatpak install flathub io.github.streetpea.Chiaki4deck
mkdir -p ~/.local/share/flatpak/repo
brunoknapp9@penguin:~$ mkdir -p ~/.local/share/flatpak/repo~/.local/share/flatpak/repo~/.local/share/flatpak/repo~/.local/share/flatpak/repo~/.local/share/flatpak/repo~/.local/share/flatpak/repo~/.local/share/flatpak/repo~/.local/share/flatpak/repo~/.local/share/flatpak/repo
~/.local/share/flatpak/repo
chmod +x /mnt/chromeos/MyFiles/Downloads/chiaki-ng.AppImage_x86_64
/mnt/chromeos/MyFiles/Downloads/chiaki-ng.AppImage_x86_64
lsusb
./chiaki-ng.AppImage_x86_64
chmod +x /mnt/chromeos/MyFiles/Downloads/chiaki-ng.AppImage_x86_64
/mnt/chromeos/MyFiles/Downloads/chiaki-ng.AppImage_x86_64
ls /dev/input
sudo apt update
sudo apt install flatpak -y
flatpak install flathub io.github.streetpea.Chiaki -y
flatpak remote-delete flathub
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak --user remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak --user install flathub io.github.streetpea.Chiaki
flatpak --user remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak --user install flathub io.github.streetpea.Chiaki-ng
sudo apt update
sudo apt install wget -y
wget https://github.com/streetpea/chiaki-ng/releases/latest/download/chiaki-ng-x86_64.AppImage
chmod +x chiaki-ng-x86_64.AppImage
./chiaki-ng-x86_64.AppImage
[200~uname -m
~uname -m
uname -m
wget https://github.com/streetpea/chiaki-ng/releases/latest/download/chiaki-ng.AppImage
chmod +x ~/Downloads/chiaki-ng.AppImage_x86_64
ls ~/Downloads
ls ~/MyFiles/Downloads
ls /mnt/chromeos/MyFiles/Downloads
chmod +x /mnt/chromeos/MyFiles/Downloads/chiaki-ng.AppImage_x86_64
/mnt/chromeos/MyFiles/Downloads/chiaki-ng.AppImage_x86_64
chmod +x /mnt/chromeos/MyFiles/Downloads/chiaki-ng.AppImage_x86_64
/mnt/chromeos/MyFiles/Downloads/chiaki-ng.AppImage_x86_64
ls /dev/input
sudo apt install joystick -y
jstest /dev/input/js0
sudo apt update
sudo apt install gamepad-support joystick evtest -y
sudo apt install joystick evtest -y
evtest
SDL_GAMECONTROLLER_IGNORE_DEVICES="" ./chiaki-ng.AppImage_x86_64
sudo evtest
ls /dev/input
sudo apt update
sudo apt install nodejs npm -y
node -v
npm -v
mkdir loja-mdf
cd loja-mdf
nano server.js
sudo apt install nano -y
nano server.js
nano index.html
npm init -y
npm install express mercadopago nodemailer cors
nano server.js
node server.js
cd loja-mdf
ls
node server.js
nano server.js
const express = require('express');
const mercadopago = require('mercadopago');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
// 🔴 CONFIGURE AQUI (OBRIGATÓRIO)
mercadopago.configure({
});
// 🔵 ROTA DE PAGAMENTO
app.post('/pagar', async (req, res) => {
rm server.js
rm server.js.save
rm 'server.j mda'
rm -r node_modules
rm package.json
rm package-lock.json
xdg-open index.html
nano index.html
nano index.html
nano style.css
xdg-open index.html
nano index.html
rm -rf *
nano index.html
nano style.css
nano index.html
loja-mdf
cd loja-mdf
rm -rf *
nano index.html
nano style.css
xdg-open index.html
nano index.html
nano style.css
cd ~/loja-mdf
xdg-open index.html
cd ~/loja-mdf
npm init -y
npm install express mercadopago cors
nano server.js
nano style.css
start index.html
python3 -m http.server 8000
nano index.html
mkdir backend
cd backend
npm init -y
npm install express mercadopago cors dotenv]
mkdir backend
cd backend
npm init -y
npm install express mercadopago cors dotenv
xdg-open index.html
nano index.html
cd ..   # volta para pasta principal
python3 -m http.server 8000
mkdir backend
cd backend
npm init -y
npm install express mercadopago cors dotenv
// backend/server.js
const express = require('express');
const mercadopago = require('mercadopago');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
mercadopago.configure({
});
app.post('/create_preference', async (req, res) => {
});
const PORT = 3000;
app.listen(PORT, () => {
});
async function finalizarCompra() {
}
// backend/server.js
const express = require('express');
const mercadopago = require('mercadopago');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
mercadopago.configure({
});
app.post('/create_preference', async (req, res) => {
});
const PORT = 3000;
app.listen(PORT, () => {
});
<html lang="pt-br">
<head>
</head>
<body>
</body>
</html>
node server.js
cd backend
node server.js
cd backend
node server.js
python3 -m http.server 8000
nano index.html
node server.js
cd ~          # volta para a pasta home
cd sua-pasta-do-site   # ← mude para o nome da sua pasta do site
python3 -m http.server 8000
cd backend
node server.js
cat > server.js
npm install express mercadopago cors
node server.js
cd ~/backend
cat > server.js
node server.js
cd ~
mkdir madeira-de-art
cd madeira-de-art
mkdir backend
cd backend
npm init -y
npm install express cors mercadopago
cat > server.js
cd ~/madeira-de-art/backend
cat > server.js
node server.js
cd ~/madeira-de-art
python3 -m http.server 8000
cd ~/madeira-de-art
cat > index.html
[200~node server.js~
node server.js
cd ~/madeira-de-art
cat > style.css
cat > index.html
# 1. Deixe o backend rodando (se não estiver)
cd ~/madeira-de-art/backend
node server.js
cd ~/madeira-de-art
python3 -m http.server 8000
cd ~/madeira-de-art
python3 -m http.server 8000
nano index.html
cd ~/madeira-de-art
cat > index.html]
cd ~/madeira-de-art
python3 -m http.server 8000
nano indcex.html
nano index.html
nano style.css
y
cd ~/madeira-de-art
cat > index.html
cd ~/madeira-de-art
python3 -m http.server 8000
ls
cd backend
node server.js
nano server.js
node server.js
cd ..
node server.js
nano script js
cd backend
nano script.js
nano index.html
xdg-open index.html
touch script.js
nano script.js
xdg-open index.html
cd /mnt/chromeos/MyFiles/Downloads/madeira-de-art
mkdir backend
cd backend
npm init -y
npm install express cors mercadopago
touch server.js
nano server.js
cd ..
node server.js
cd backend
node server.js
node -v
cd /mnt/chromeos/MyFiles/Downloads/madeira-de-art/backend
is
ls
node server.js
code server.js
nano server.js
node server.js
cd ..
nano script.js
nano script.js
nano style.css
nano style css
cd ~/backend
node server.js
cd ..
cd ~/backend
node server.js
cd ..
sudo apt install git
cd ~/backend
git init
git add .
git commit -m "backend pronto "
git remote add origin https://github.com/Bwknapp/madeira-backend.git
git branch -M main
git push -u origin main
git init
git add .
git commit -m "backend pronto"
git config --global user.name "Bwknapp"
git config --global user.email "SEUEMAIL"
git commit -m "backend pronto"
git branch -M main
git remote add origin https://github.com/Bwknapp/madeira-backend.git
git remote remove origin
git remote add origin https://github.com/Bwknapp/madeira-backend.git
git push -u origin main
git ṕush -u origin main
git push -u origin main
cd ..
git add .
cd backend
git add .
git commit -m "token env"
git push
git status
git remote -v
mousepad server.js
node server.js
nano server.js
npm install cors
git add .
git commit -m "cors"
git push
cd ~/backend
git add .
git commit -m "cors"
git push]
nano server.js
git add .
git commit -m "rota online"
git push
nano server.js
git add .
git commit -m "token certo"
git push
cd backend
git add .
git commit -m "token certo"
git push
nano index.html
cd ..
nano script.js
node server.js
nano script.js
nano script.js]
node server.js
nano index.html
node server.js
cd backend
nano server.js
git add .
git commit -m "token producao"
git push
node server.js
cd ..
ls
mkdir knappwood
cd knappwood
touch index.html style.css script.js server.js
nano index.html
nano style.css
xdg-open index.html
nano index.html
nano style.css
xdg-open index.html
nano index.html
xdg-open index.html
nano server.js
nano sstyle.css
nano style.css
nano script.js
cd ..
nano style.css
cd ..
cd backend
node server.js
