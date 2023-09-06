const btn = document.querySelector('#detalles')
const lista = document.querySelectorAll('.lista')



btn.addEventListener('click', ()=>{
  lista.forEach((el)=>{
    el.classList.toggle('d-none')
  })
    if(lista[1].className == 'lista overflow-hidden d-none'){
      btn.innerHTML = 'Ver Detalle'
    
    } else {
      btn.innerHTML = 'Ver Menos'
      const typed = new Typed('.escribir', {
        strings : [ `<li class="border-bottom border-dark-subtle">Liquidación de impuestos.</li>
        <li class="border-bottom  border-primary-subtle">Emisión y cancelación de veps.</li>
        <li class="border-bottom  border-success-subtle">Análisis de cuentas contables.</li>
        <li class="border-bottom border-danger-subtle">Armado de manuales de procedimiento.</li>
        <li class="border-bottom  border-white">Mejora de procesos internos de los distintos sectores.</li>
        <li class="border-bottom border-black">Auditoria.</li>
        <li class="border-bottom border-black">Control de tarjetas (Plataforma PAYWAY).</li>`],
        typeSpeed: 10,
        startDelay: 500
      })
      const typed1 = new Typed('.escribir1', {
        strings : [ `<li class="border-bottom border-danger-subtle">Conciliaciones Bancarias.</li>
        <li class="border-bottom border-white">Armado del cash-flow real y proyectado.</li>
        <li class="border-bottom border-black">Emisión de transferencias  y pago de impuestos vía Interbanking o portales bancarios.</li>
        <li class="border-bottom border-white">Confeccion de E-Cheqs.</li>
        <li class="border-bottom border-white">Pago de sueldos.</li>
        <li class="border-bottom border-white">Armado de Informes financieros a medida.</li>
        <li class="border-bottom border-black">Ebitda. </li>`],
        typeSpeed: 10,
      })
      const typed2 = new Typed('.escribir2', {
        strings : [ `<li class="border-bottom border-dark-subtle">Conciliaciones de cuentas corrientes (Proveedores y Clientes). </li>
        <li class="border-bottom border-primary-subtle">Facturación a clientes nacionales e internacionales.</li>
        <li class="border-bottom border-success-subtle">Informes semanales y mensuales de gastos, abiertos por concepto. </li>
        <li class="border-bottom border-danger-subtle">Informe mensual de utilidad neta.  </li>
        <li class="border-bottom border-white">Pago de sueldos.</li>
        <li class="border-bottom border-black">Control de gestión. </li>`],
        typeSpeed: 10,
      })
      const typed3 = new Typed('.escribir3', {
        strings : [ `<li class="border-bottom border-dark-subtle">Recruiting. Tomamos nota de la posición, las tareas a cubrir, experiencia requerida y aptitudes y el especialista en RRHH lleva a cabo todo el proceso. </li>
        <li class="border-bottom border-primary-subtle">Liquidacion de sueldos.</li>
        <li class="border-bottom border-success-subtle">Armado de manual de políticas de recursos humanos. </li>`],
        typeSpeed: 10,
      })
      const typed4 = new Typed('.escribir4', {
        strings : [ `<li class="border-bottom border-dark-subtle">Inscripción. </li>
        <li class="border-bottom border-primary-subtle">Facturación.</li>
        <li class="border-bottom border-success-subtle">Recategorización. </li>`],
        typeSpeed: 10,
      })
      const typed5 = new Typed('.escribir5', {
        strings : [ ``],
        typeSpeed: 10,
      })
    }

    btn.classList.toggle('heartbeat')
    
   
})



const tema = document.querySelector("#tema")
const claro = document.querySelector("#claro")
const oscuro = document.querySelector("#oscuro")
const body = document.querySelector("body")
const logo = document.querySelector("#logo")
const logoDark = document.querySelector("#logo-dark")
const cambiologo = document.querySelectorAll(".logos-dark")
const cambiologo1 = document.querySelectorAll(".logos-dark1")
const sobreMi = document.querySelector("#sobremi")


tema.addEventListener("click", ()=>{
  oscuro.classList.toggle("d-none")
  claro.classList.toggle("d-none")
  body.classList.toggle("dark")
  tema.classList.toggle("link-dark")
  tema.classList.toggle("link-warning")
  logoDark.classList.toggle("d-none")
  logo.classList.toggle("d-none")
  

  cambiologo.forEach((logo)=>{
    logo.classList.toggle("d-none")
  })
  cambiologo1.forEach((logo)=>{
    logo.classList.toggle("d-none")
  })
  body.classList.contains("dark") ? localStorage.setItem("dark-mode", "true") : localStorage.setItem("dark-mode", "false")
  
})

if(localStorage.getItem("dark-mode") == "true"){
  body.classList.add("dark")
  claro.classList.add("d-none")  
  oscuro.classList.remove("d-none")
  tema.classList.remove("link-dark")
  tema.classList.add("link-warning")
  logoDark.classList.remove("d-none")
  logo.classList.add("d-none")
 
  cambiologo.forEach((logo)=>{
    logo.classList.remove("d-none")
  })
  cambiologo1.forEach((logo)=>{
    logo.classList.add("d-none")
  })
} else {
  body.classList.remove("dark")
  claro.classList.remove("d-none")  
  oscuro.classList.add("d-none")
  tema.classList.add("link-dark")
  tema.classList.remove("link-warning")
  logoDark.classList.add("d-none")
  logo.classList.remvoe("d-none")
  
  cambiologo.forEach((logo)=>{
    logo.classList.add("d-none")
  })
  cambiologo1.forEach((logo)=>{
    logo.classList.remove("d-none")
  })
}