Page({
  data:{

  },
  onSwitchChange:function(event){
    console.log(event.detail.value);
  },
  onRadioChange:function(event){
    console.log(event.detail.value);
  },
  onCheckboxChange:function(event){
    console.log(event.detail.value);
  },
  formSubmit:function(event){
    console.log("form submit:",event.detail.value);
  },
  formReset: function (event) {
    console.log("form reset");
  }
})