# El reto de una nueva aplicación web corriendo en la nube computacional de AWS.

El equipo de Tecnología de Copa Airlines se encuentra en un proyecto donde se requieren migrar cargas de trabajo de las premisas a la nube computacional buscando elasticidad, de tal manera, que a ustedes como equipo, se les ha encomendado el objetivo de poner en operación una aplicación en el menor tiempo posible buscando aprovechar las bondades de la nube computacional en cuanto a escalabilidad, resiliencia, seguridad y eficiencia en costos a fin de mantener la infraestructura protegida de potenciales ciberataques.

# Oportunidad: 

Aplicación web para saber la distancia (en millas y kilómetros) entre aeropuertos, para lo cual Copa Airlines les facilitará 2 conjuntos de datos que son: la distancia en millas entre los aeropuertos del mundo así como el nombre de los mismos siguiendo la nomenclatura de la IATA (International Air Transportation Association).

# Objetivo: 

Construir una arquitectura para la aplicación antes mencionada, a la cual se brindará un puntaje basado en: los servicios configurados, las pruebas que lleguen a realizar sobre la misma así como a las mejores prácticas aplicadas

# Puntuación Base:

Puntos opcionales distribuidos de la siguiente manera:

- Construir la arquitectura desde cero - **150 puntos**
    - EC2: servidor web + base de datos + almacenamiento
- **Publicar aplicación y registrar el endpoint (url, ip publica, dns, etc) en el siguiente documento:  http://bit.ly/copaendpoints **100 puntos**
- Múltiples zonas de disponibilidad para el servidor web - **100 puntos**
- Múltiples zonas de disponibilidad para la aplicación web - **100 puntos**
- Múltiples zonas de disponibilidad para los datos - **100 puntos** (base de datos). Puede ser RDS o se puede crear otra instancia EC2.
- VPC: Subredes públicas y privadas, enrutamiento de trafico, Nat gateways - **100 puntos**
- Balanceo de carga - **100 puntos** (Por cada balanceador)
- Grupo de autoescalamiento - **150 puntos** (Por cada grupo de autoescalamiento)
- S3 - **100 puntos** (Por cada bucket usado correctamente y que forme parte integra de la arquitectura de la App - Respaldo u almacenamiento de objetos)
- Grupos de seguridad - **50 puntos** (Por cada grupo de seguridad usado correctamente y que forme parte integra de la arquitectura de la App)
- Monitoreo de la aplicación a través de CloudWatch para tomar acciones - **50 puntos**
- IAM - **100 puntos** - Usuarios y roles definidos
- CDN - **50 puntos**
- Gestión remota
    - Host bastion - **50 puntos**
    - Cloud9 - **100 puntos**
    - System Manager - **150 puntos**
- Cualquier característica adicional - **50 puntos**

# Retos adicionales (800 puntos que se irían agregando):

- Automatizar cambios en el App - **125 puntos**
- Replicación multiregión - **125 puntos**
- Automatizar el parchado, respaldo de almacenamiento, gestión de los recursos - **100 puntos**
- Infraestructura como Código - **150 puntos**
- EC2 fleet, instancias tipo Spot - **125 puntos**
- Controles de seguridad (CloudTrail, GuardDuty, WAF, Config, KMS, TrustedAdvisor) - **175 puntos**

# Ejemplo Arquitectura de Referencia

![Arquitectura](ExampleWebAppArch.jpg)
