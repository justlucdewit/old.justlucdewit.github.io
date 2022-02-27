<!--// https://justlucdewit.github.io/cv/ -->

<template>
  <Constraint>
    <h1 style="display: flex;justify-content: space-between;align-items: center;">
      Curriculum Vitae
      <button style="float: right;" @click="downloadCvPDF">
        Download PDF
      </button>
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

    <hr /><br /><br />

    <h1>Education</h1> 
    <b>Zwijsen College Veghel Havo</b><br />
    <p style="display:flex; align-items: center;"><IconCalendar />&nbsp; 2014 - 2019</p>
    <p>
      I finished my senior general secondary education (Havo) on the Zwijsen college in Veghel, I had the 'nature and health' profile, meaning i mainly focused on physics, biology, but also computer science.
    </p>

    <br />
    
    <b>ROC de Leijgraaf Veghel (application / media development)</b>
    <p style="display:flex; align-items: center;"><IconCalendar />&nbsp; 2019 - Now</p>
    <p style="margin-bottom: 20px;">
      Currently I'm getting my secondary vocational education (Mbo) for application / media development.
      I'm currently finishing my third and last year.
    </p>

    <hr /><br /><br /><br />

    <h2>Work experience</h2>
    <b>Restaurant De Rijger, Zijtaart - Dishwasher</b><br />
    <p style="display:flex; align-items: center;"><IconCalendar />&nbsp; 2016 - 2020</p>
    <p>
      Between 2016 and 2020 i had a sidejob at restaurant De Rijger besides my school education to earn some income, i worked here about 2 to 3 times a week, mostly in the weekend. I washed dishes and also helped with bringing catering.
    </p>

    <br />

    <b>Jumbo distribution center - Order picker</b><br />
    <p style="display:flex; align-items: center;"><IconCalendar />&nbsp; 2020 - 2021</p>
    <p>
      Between 2020 and 2021 I worked at Jumbo DC as an order picker. I did this as a sidejob to earn some income besides my school education.
    </p>

    <br />

    <b>STA Software - Fullstack web developer</b><br />
    <p style="display:flex; align-items: center;"><IconCalendar />&nbsp; 2021 - 2020</p>
    <p>
      I started my work at STA software as a school internship, but after that the internship ended i was invited to stay there as an actual job.
      I worked there besides my school education to learn more about software development and earn some income.
    </p>

    <br />

    <b>Quadira - Software developer (internship)</b><br />
    <p style="display:flex; align-items: center;"><IconCalendar />&nbsp; 2022 - Now</p>
    <p>
      Currently i work for Quadira for my 2nd (and last) school internship, I do a lot of different things here including coding in windows forms,
      to orient myself on the software stacks that they use.
    </p>

    <hr /><br /><br /><br />
    <h2>Skills</h2>
    
    <table>
      <tbody>
        <tr>
          <td class="bold">Experienced</td>
          <td>VueJS &nbsp;&nbsp;&nbsp; ASP.NET &nbsp;&nbsp;&nbsp; C# &nbsp;&nbsp;&nbsp; NodeJS</td>
        </tr>
        <tr>
          <td class="bold">Proficient</td>
          <td>Python &nbsp;&nbsp;&nbsp; Typescript</td>
        </tr>
        <tr>
          <td class="bold">Entry level</td>
          <td>C99</td>
        </tr>
      </tbody>
    </table>

    <hr /><br /><br /><br />

    <h2>Awards</h2>

    <b>Hackathon Masters 2019</b><br />
    <p style="display:flex; align-items: center;"><IconCalendar />&nbsp; 2019 &nbsp;&nbsp;&nbsp; <IconTrophy />&nbsp; 1st place (audience)</p>
    <p>
      I participated in Hackathon Masters with my team named 'PHPoggers',
      we had to come up for a solution for farmers to collect nuts and monitor
      their farms more efficiently, we eventually came up with an idea of
      collection robots who scout the farm and then give feedback on the status
      via an app.

      After the presentation, we got first place for the audience award.
    </p>

    <br />

    <b>Skills Masters 2022 Semi Finals</b><br />
    <p style="display:flex; align-items: center;"><IconCalendar />&nbsp; 2022 &nbsp;&nbsp;&nbsp; <IconTrophy />&nbsp; Continuation to finals</p>
    <p>
      I participated in the Skills Masters 2022 competition for software developers.
      Even tho the competition was ended early due to bad weather, i managed to get
      an entry to the national finale.
    </p>

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
import IconTrophy from "icon/Trophy.vue";

export default {
  components: {
    Constraint,
    IconEmail,
    IconGithub,
    IconWeb,
    IconMapMarker,
    IconCalendar,
    IconTrophy
  },

  methods: {
    downloadCvPDF() {
      const a = document.createElement('a')
      a.href = "CV.pdf";
      a.setAttribute('download', "CV.pdf");
      a.click();
    }
  }
}
</script>

<style Scoped>
td {
  padding-right: 10px;
}

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