<?php include_once 'includes/template/header.php' ?>

  <section class="hero">
    <div class="container-hero container">
      <h2 class="text-hero">Contactanos</h2>
    </div>
  </section>


  <main class="seccion">
    <!-- Mapa -->
    <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.0382121603448!2d-74.78340268566197!3d10.96048615876748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d55fd37847f%3A0x20c86e8cd161f9d8!2sCra.%2021d%20%2325-71%2C%20Barranquilla%2C%20Atl%C3%A1ntico!5e0!3m2!1ses!2sco!4v1613322073938!5m2!1ses!2sco" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
    <form class="form" action="">
      <div class="field">
        <label for="name" class="field__label">Nombre</label>
        <input class="field__input" type="text" placeholder="Tu nombre" id="name">
      </div>
      <div class="field">
        <label for="email" class="field__label">E-mail</label>
        <input class="field__input" type="email" placeholder="Tu correo" id="email">
      </div>
      <div class="field" class="field__label">
        <label for="message" class="field__label">Mensaje</label>
        <textarea class="field__input field__input--textarea" id="mensaje" placeholder="Escriba su mensaje..."></textarea>
      </div>
      <div class="field--submit">
        <input type="submit" value="Enviar" class="button button--contactanos">
      </div>
    </form>
  </main>
<?php include_once 'includes/template/footer.php' ?>
