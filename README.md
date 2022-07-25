# Notas
Este es un ts-restserver

No olvidar reconstruir la carpeta node_modules con el comando:
```
npm install
```

COMANDOS PARA EJECUTAR EN EL CMD, (se recomienda abrir dos cmd):
```
node dist/app.js     o bien    nodemon dist/app.js

para que typescript entre en modo observador y notifique cambios, escribir el comando    tsc --watch

```

EN GOOGLE CHROME ABRIR COMO:
```
http://localhost:8000/
```

BD TablePlus con mysql, tener en cuenta activar Apache y mysql en xampp, usuario: root, contraseña: (no tiene, espacio vacio)
```
localhost
```

EN POSTMAN LOS ENDPOINT SON::
```
get - getUsuarios      - localhost:8000/api/usuarios
get - getUsuario       - localhost:8000/api/usuarios/1
post - postUsuario     - localhost:8000/api/usuarios
put - putUsuario       - localhost:8000/api/usuarios/1
delete - deleteUsuario - localhost:8000/api/usuarios/1
```