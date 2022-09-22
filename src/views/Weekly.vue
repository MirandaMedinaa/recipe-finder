<template>
  <div>
    <h1>Weekly Plan</h1>
    <b-container>
      <b-row>
        <b-col><b-button>Last Week</b-button></b-col>
        <b-col><h2>Week 2</h2></b-col>
        <b-col><b-button>Next Week</b-button></b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="border">
        <b-col class="border"><h4>Monday</h4></b-col>
        <b-col class="border"><h4>Tuesday</h4></b-col>
        <b-col class="border"><h4>Wednesday</h4></b-col>
        <b-col class="border"><h4>Thursday</h4></b-col>
        <b-col class="border"><h4>Friday</h4></b-col>
        <b-col class="border"><h4>Saturday</h4></b-col>
        <b-col class="border"><h4>Sunday</h4></b-col>
      </b-row>
      <b-row class="morning">
        <b-col class="border-left border-right day"><div class="activity skill medium"><h5 class="title">Skill</h5></div></b-col>
        <b-col class="border-right"></b-col>
        <b-col class="border-right"></b-col>
        <b-col class="border-right"><div class="activity prep short"><b-button class="activityButton" v-b-modal="'morning-modal'"><h5>Prep</h5></b-button></div></b-col>
        <b-modal id="morning-modal" size="lg" title="Thursday Morning" ok-variant="success" ok-title="Mark as Complete" centered>
          Prep - chop two onions for the rest of the week's meals <template #modal-footer>
          <!--<b-button class="prep">View Resources</b-button><b-button class="prep">Mark as Complete</b-button>-->
          </template></b-modal>
        <b-col class="border-right"></b-col>
        <b-col class="border-right"></b-col>
        <b-col class="border-right"></b-col>
      </b-row>
      <b-row class="afternoon">
        <b-col class="border-left border-right day"></b-col>
        <b-col class="border-right"><div class="activity prep medium"><h5 class="title">Prep</h5></div></b-col>
        <b-col class="border-right"></b-col>
        <b-col class="border-right"></b-col>
        <b-col class="border-right"><div class="activity skill short"><h5 class="title">Skill</h5></div></b-col>
        <b-col class="border-right"><div class="activity prep long"><h5 class="title">Prep</h5></div></b-col>
        <b-col class="border-right"></b-col>
      </b-row>
      <b-row class="night border-bottom">
        <b-col class="border-left border-right day"><div class="activity prep medium"><h5 class="title">Prep</h5></div></b-col>
        <b-col class="border-right"></b-col>
        <b-col class="border-right"><div class="activity cook long"><h5 class="title">Cook</h5></div></b-col>
        <b-col class="border-right"><div class="activity cook short"><b-button class="activityButton" v-b-modal="'night-modal'"><h5 class="buttonTitle">Cook</h5></b-button></div></b-col>
        <b-modal id="night-modal" size="lg" title="Thursday Night" centered>Cook - Dinner for tonight and lunch for tomorrow <template #modal-footer><b-button class="cook">View Lunch Recipe</b-button><b-button class="cook">View Dinner Recipe</b-button></template></b-modal>
        <b-col class="border-right"></b-col>
        <b-col class="border-right"></b-col>
        <b-col class="border-right"><div class="activity cook long"><h5 class="title">Cook</h5></div></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
.day {
  height: 230px;
}

.col {
  padding: 5px;
}

.title {
  padding-top: 10px;
  color: white;
}

.skill {
  background-color: #f1ac18;
}

.prep {
  background-color: #79a33d;
  border: none;
}

.cook {
  background-color: #f25b0a;
  border: none;
}

.short {
  height: 30%;
  border-radius: 10px;
}

.medium {
  height: 60%;
  border-radius: 8%;
}

.long {
  height: 90%;
  border-radius: 13px;
}

.activityButton {
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  vertical-align: top;
}

.activityButton h5 {
  padding-top: -10px;
  margin-top: -15px;
  vertical-align: top;
}

.activityButton:hover {
  background-color: transparent;
}

.activityButton:focus {
  background-color: transparent;
}

.activityButton:active {
  background-color: transparent;
}

</style>


