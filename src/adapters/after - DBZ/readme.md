Observaciones

- Mas que un adapter me parece un ejemplo de un bridge pattern: https://es.wikipedia.org/wiki/Bridge_(patr%C3%B3n_de_dise%C3%B1o). Ten en cuenta que son muy parecidas, pero sin embargo tiene un fin distinto.

- El Adapter pattern en general (https://en.wikipedia.org/wiki/Adapter_pattern) busca reducir y abstraer la complejidad de usar una interface de un tercero o librería externa.

Te pongo un ejemplo como referencia, podrías usarlo para construir un ejemplo o podrias buscar algo similar:

- Como parte del requerimiento técnico de Tax Link, tenemos la necesidad de abstraer inversify como IoC de tal forma que podamos aplicar un Service Locator, o Inversify solo con definir un adaptador.

- Otro ejemplo, tenemos que consumir servicios de Tax (similar a CCH), por requerimiento de negocio debemos consumir endpoints de CCH. Sin embargo, el equipo de Cohenworks a desarrollador un API que podemos referenciar y iulizarlo para consumir no solo CCH sino otros similares. En el diseño técnico, nos piden ser capaces de utilizar cualquiera de las opciones (CCH Directo o el API de Cohenworks). ¿Como podemos abstraer y adaptar este comportamiento?

Trata de trabajar un ejemplo de este tipo, pensando o utilizando alguna API o package existente al cual no tengamos acceso de código solo a sus interfaces.
