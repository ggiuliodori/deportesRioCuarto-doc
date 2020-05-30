module.exports = {
    title: 'DEPORTES RÍO CUARTO - DOCUMENTACIÓN',
    description: 'Documentación',
    themeConfig: {
      nav: [
        { text: 'Inicio', link: '/' },
        { text: 'Demo', link: 'http://134.209.41.243:8083' },
        { text: 'Github', link: 'https://github.com/ggiuliodori/deportesRioCuarto-doc.git' },
      ],
      sidebar:[
        ['/', 'Inicio'],
        ['/docs/inicio/flujos_negocio', 'Flujos de Negocio'],
        {
          title: 'Funcionalidades',
          children: [ 
            ['/docs/funcionalidades/adr0001.md', 'ADR0001'],
            ['/docs/funcionalidades/adr0002.md', 'ADR0002'],
            ['/docs/funcionalidades/adr0003.md', 'ADR0003'],
            ['/docs/funcionalidades/adr0004.md', 'ADR0004']
           ]
        },
        {
          title: 'Módulos',
          children: [ 
            ['/docs/modulos/est0001.md', 'Dasboard'],
            ['/docs/modulos/est0002.md', 'Socios'],
            ['/docs/modulos/est0003.md', 'Carnet'],
            ['/docs/modulos/est0004.md', 'Validar Socio'],
            ['/docs/modulos/est0005.md', 'Cajas'],
            ['/docs/modulos/est0006.md', 'Pagos'],
            ['/docs/modulos/est0007.md', 'Disciplinas'],
            ['/docs/modulos/est0008.md', 'Examen Médico'],
            ['/docs/modulos/est0009.md', 'Auditoría'],
            ['/docs/modulos/est00010.md', 'Users'],
            ['/docs/modulos/est00011.md', 'Areas'],
            ['/docs/modulos/est00012.md', 'Lector'],
            ['/docs/modulos/est00013.md', 'Predio'],
            ['/docs/modulos/est00014.md', 'Configuraciones'],
            ['/docs/modulos/est00015.md', 'Notificaciones'],
            ['/docs/modulos/est00016.md', 'Cambio de Predio']
           ]
        },
        
        {
          title: 'Configuración',
          children: [ 
            ['/docs/config/hexing.md', 'Hexing'],
            ['/docs/config/itron.md', 'Itron'],
            ['/docs/config/circutor.md', 'Circutor']
           ]
        },
        {
          title: 'Arquitectura',
          children: [ 
            ['/docs/arquitectura/ntm.md', 'NTM']
           ]
        },
        {
          title: 'Tags',
          children: [ 
            ['/docs/tags/ntm.md', 'NTM']
           ]
        }
      ]
  }
}

  