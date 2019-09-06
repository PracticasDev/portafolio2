
const Slides = [
  {
    titulo: 'ACERCA DE MI',
    contenido: 'Me gusta desarrollar aulquier cosa, no importa si sea algo simple o complejo, siempre voy a cumplirlo',
    img: require('../../assets/slide/slide1.jpg'),
    propiedades: {
      id: 'img-1',
      pre: 'img-3',
      next: 'img-2',
    }
  }, {
    titulo: 'MOBILE DEVELOPMENT',
    contenido: 'Me gusta desarrollar aulquier cosa, no importa si sea algo simple o complejo, siempre voy a cumplirlo',
    img: require('../../assets/slide/slide2.png'),
    propiedades: {
      id: 'img-2',
      pre: 'img-1',
      next: 'img-3',
    }
  }, {
    titulo: 'WEB DEVELOPMENT',
    contenido: 'Me gusta desarrollar aulquier cosa, no importa si sea algo simple o complejo, siempre voy a cumplirlo',
    img: require('../../assets/slide/slide3.jpg'),
    propiedades: {
      id: 'img-3',
      pre: 'img-2',
      next: 'img-1',
    }
  }
]
const Habilidades = [
  {
    nombre: 'WEB',
    img: require('../../assets/services/web.png'),
    titulo: 'Frontend',
    contenido: 'Tengo experiencia diseñando paginas web con:',
    skill: ['Html', 'JavaScript', 'Css', 'Sass', 'React', 'Redux']
  },
  {
    nombre: 'WEB',
    img: require('../../assets/services/backend.png'),
    titulo: 'Backend',
    contenido: 'Las aplicacion por lado del servidor',
    skill: ['Java', 'Php', 'Symfony', 'Nodejs', 'Python', 'Django']
  },
  {
    nombre: 'ANDROIDE',
    img: require('../../assets/services/androide.png'),
    titulo: 'Android - Ios',
    contenido: 'Las herramientas que uso para diseñar una aplicacion android y ios son :',
    skill: ['react-native', 'android studio',]
  },
  {
    nombre: 'BASE DE DATOS',
    img: require('../../assets/services/base-de-datos.png'),
    contenido: 'Experiencia modelando datos con:',
    skill: ['MySql', 'Postgres', 'Oracle']
  },
  {
    nombre: 'HERRAMIENTAS',
    img: require('../../assets/services/tools.png'),
    titulo: 'Herramientas',
    contenido: 'Herramientas que me ayudan a lograr los anterior mencionado',
    skill: ['(Sistema control de version) Git', 'Ilustrator', 'Docker', 'Firebase', 'Aws', 'Azure', 'Heroku']
  },
  {
    nombre: 'BASE DE DATOS',
    img: require('../../assets/services/ciclo.png'),
    titulo: 'Metodologias de desarrollo',
    contenido: 'Herramientas que me ayudan a lograr los anterior mencionado',
    skill: ['Programacion extrema(xp)', 'Scrum']
  }
]
const Logos = [
  {
    img: require('../../assets/social/facebook.png'),
    enlace: '#',
    social: 'facebook'
  },
  {
    img: require('../../assets/social/instagram.png'),
    enlace: '#',
    social: 'instagram'
  },
  {
    img: require('../../assets/social/linkedin.png'),
    enlace: '#',
    social: 'linkedin'
  },
  {
    img: require('../../assets/social/skype.png'),
    enlace: '#',
    social: 'skype'
  },
  {
    img: require('../../assets/social/twitter.png'),
    enlace: '#',
    social: 'twitter'
  }
]
const Rutas = [
  { nombre: "presentacion", clave: "#presentacion"},
  { nombre: "acerca de mi", clave: "#acercademi" },
  { nombre: "contactame", clave: "#contactame"}
]
const DataPersonal = {
  nombre: 'Genderson',
  apellido: 'Canchari Lizarbe',
  correo: 'yegecali5@gmail.com'
}
const AboutMe = [
  'Soy un estudiante de Ingenieria de Sistemas,con muchas ganas de aprender las nuevas tecnologias y construir proyectos, es emocionante e indescriptible ver como un proyecto desarrollado con tanto tanto esfuerzo funcione y mas aun cuando entre en produccion',
  'Actualmente estoy investigando y aprendiendo tecnologias de la actualidad o tienen tendencias tales como: Blockchain, Big data espero poder aprenderlos y aplicarlos en mis futuros proyectos ;) ',
  'Entre mis valores se encuentran: Perseverante, Puntualidad, Disciplina, Compromiso con la tarea, disponibilidad, identidad con la profesion'
]
export { Slides, Habilidades, Logos, Rutas, DataPersonal, AboutMe }