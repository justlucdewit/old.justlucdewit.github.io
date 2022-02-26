<!--// https://justlucdewit.github.io/cv/ -->

<template>
  <Constraint>
    <h1 style="text-align: center">
      Curriculum Vitae
    </h1>

    <hr /><br />

    <div id="cv-header">
      <div class="header-item">
        <IconEmail />&nbsp;
        luc.dewit@hotmail.nl
      </div>
      <div class="header-item">
        <IconWeb />&nbsp;
        github.com/justlucdewit
      </div>
      <div class="header-item">
        <IconGithub />&nbsp;
        justlucdewit.github.io
      </div>
      <div class="header-item">
        <IconMapMarker />&nbsp;
        Meierijstad, The Netherlands
      </div>
    </div>

    <hr /><br />

    <h1>Education</h1> 
    <b>ZwijsenCollege Veghel Havo</b><br />
    <p style="display:flex; align-items: center;"><IconCalendar />&nbsp; 2014 - 2019</p>
    <p>
      I finished my senior general secondary education (HAVO) on the Zwijsen collega in Veghel, I had the 'nature and health' profile, meaning i mainly focused on physics, biology, but also computer science
    </p>

    <hr style="border: 1px dashed #777;margin-top: 20px"><br />
    
    <b>ROC de Leijgraaf Veghel (application- and media development)</b>
    <p style="display:flex; align-items: center;"><IconCalendar />&nbsp; 2019 - Now</p>
    <p style="margin-bottom: 20px;">
      Currently im getting my secondary vocational education (MBO) for application- and media development.
      Im currently finishing my third and last year.
    </p>
    <!--
    


    <hr /><br />

    <h2>Work</h2>

    <hr /><br />
    <h2>Skills</h2>

    <hr /><br />

    <h2>Awards</h2>-->
  </Constraint>
</template>

<script>
// Import components
import Constraint from "@/components/Constraint.vue";

// Import icons
import IconEmail from "icon/Email.vue";
import IconGithub from "icon/Github.vue";
import IconWeb from "icon/Web.vue";
import IconMapMarker from "icon/MapMarker.vue";
import IconCalendar from "icon/Calendar.vue";

export default {
  components: {
    Constraint,
    IconEmail,
    IconGithub,
    IconWeb,
    IconMapMarker,
    IconCalendar
  }
}
</script>

<style Scoped>
#cv-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

p {
  margin: 5px 0;
  padding: 0;
}

.header-item {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>