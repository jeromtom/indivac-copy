$(document).ready(function() {
	var timer = {};
	$('.datepicker').datepicker({
		format: 'dd-mm-yyyy',
		startDate: '-18y',
		endDate: '-d'
	}).on('changeDate', function(ev){
		$(this).datepicker('hide');
	});

	$(".button_style").unbind().click(function(){
		var objShowHide = $(this);		
		if(objShowHide.html()){
			if(objShowHide.html()=='More'){
				objShowHide.prev().slideDown();
				objShowHide.html('Hide');
			} else {
				objShowHide.prev().slideUp();
				objShowHide.html('More');
			}
		}
	});

	//create vac card top
	$('#vacc_sch_box input[name="btnSchedule"]').click(function(){
		var chName = $.trim($('#vacc_sch_box input[name="ch_name"]').val());
		var chDob = $.trim($('#vacc_sch_box input[name="ch_dob"]').val());
		var chGender = $.trim($('#vacc_sch_box select[name="ch_gender"]').val());
		var chMsg = '';

		if(chName.search(/\S/) == -1){
			chMsg = 'Child name cannot be left blank.';
		}else if(chDob.search(/\S/) == -1){
			chMsg = 'Date of birth cannot be left blank.';
		} else if(chGender.search(/\S/) == -1){
			chMsg = 'Gender cannot be left blank.';
		}
		
		clearTimeout(timer.cherrormsg);
		if(chMsg != ""){
			$("#ch_error_msg").addClass("alert alert-danger").html(chMsg).removeClass("disp-no");
			timer.cherrormsg = setTimeout(function(){
				$("#ch_error_msg").removeClass().addClass("disp-no").html("&nbsp;");
				timer.cherrormsg = 0;
			},5000);
		}else{
			$("#ch_error_msg").removeClass().addClass("disp-no").html("&nbsp;");
			$('#createVacCardModal input[name="hidden_ch_name"]').val(chName);
			$('#createVacCardModal input[name="hidden_ch_dob"]').val(chDob);
			$('#createVacCardModal input[name="hidden_ch_gender"]').val(chGender);
			$("#createVacCardModal").modal("show");

			//close modal box
			$('#createVacCardModal').find('button[type="button"]').click(function(){
				$("#ch_error_msg, #ch_error_msg_hidden").removeClass().addClass("disp-no").html("&nbsp;");
				$('#createVacCardModal input[type="hidden"]').val('');
				$('#createVacCardModal input[name="hidden_ch_email"], #createVacCardModal input[name="hidden_ch_phone"]').val('');
				$("#createVacCardModal").modal("hide");
			});

			//create vaccine card
			$('#createVacCardModal button[type="submit"]').click(function(){
				var chEmail = $.trim($('#createVacCardModal input[name="hidden_ch_email"]').val());
				var chPhone = $.trim($('#createVacCardModal input[name="hidden_ch_phone"]').val());
				var chEmailValid = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

				var chMsgHidden = '';
				if(chEmail.search(/\S/) == -1){
					chMsgHidden = 'Email cannot be left blank.';
				}else if(chEmailValid.test(chEmail)== false){
					chMsgHidden = 'Email address invalid.';
				}else if(chPhone.search(/\S/) == -1){
					chMsgHidden = 'Phone cannot be left blank.';
				}else if(chPhone.search(/^[0-9\+,\-\s\(\)]+$/) == -1){
					chMsgHidden = 'Phone number invalid.';
				} else if(chPhone.length != 10){
					chMsgHidden = 'Phone number invalid.';
				}

				clearTimeout(timer.cherrormsghidden);
				if(chMsgHidden != ""){
					$("#ch_error_msg_hidden").addClass("alert alert-danger").html(chMsgHidden).removeClass("disp-no");
					timer.cherrormsghidden = setTimeout(function(){
						$("#ch_error_msg_hidden").removeClass().addClass("disp-no").html("&nbsp;");
						timer.cherrormsghidden = 0;
					},5000);
				} else {
					$('#createVacCardModal input[name="pagename"]').val('child-vaccinations.php');
					$("#ch_error_msg_hidden").removeClass().addClass("alert alert-success").html('Creating vaccine card. Please wait...');
					return true;
				}
				return false;
			});
		}
	});

	//create vac card bottom
	$('#vacc_sch_box1 input[name="btnSchedule1"]').click(function(){
		var chName = $.trim($('#vacc_sch_box1 input[name="ch_name"]').val());
		var chDob = $.trim($('#vacc_sch_box1 input[name="ch_dob"]').val());
		var chGender = $.trim($('#vacc_sch_box1 select[name="ch_gender"]').val());
		var chMsg = '';

		if(chName.search(/\S/) == -1){
			chMsg = 'Child name cannot be left blank.';
		}else if(chDob.search(/\S/) == -1){
			chMsg = 'Date of birth cannot be left blank.';
		} else if(chGender.search(/\S/) == -1){
			chMsg = 'Gender cannot be left blank.';
		}
		
		clearTimeout(timer.cherrormsg);
		if(chMsg != ""){
			$("#ch_error_msg1").addClass("alert alert-danger").html(chMsg).removeClass("disp-no");
			timer.cherrormsg = setTimeout(function(){
				$("#ch_error_msg1").removeClass().addClass("disp-no").html("&nbsp;");
				timer.cherrormsg = 0;
			},5000);
		}else{
			$("#ch_error_msg1").removeClass().addClass("disp-no").html("&nbsp;");
			$('#createVacCardModal input[name="hidden_ch_name"]').val(chName);
			$('#createVacCardModal input[name="hidden_ch_dob"]').val(chDob);
			$('#createVacCardModal input[name="hidden_ch_gender"]').val(chGender);
			$("#createVacCardModal").modal("show");

			//close modal box
			$('#createVacCardModal').find('button[type="button"]').click(function(){
				$("#ch_error_msg1, #ch_error_msg_hidden").removeClass().addClass("disp-no").html("&nbsp;");
				$('#createVacCardModal input[type="hidden"]').val('');
				$('#createVacCardModal input[name="hidden_ch_email"], #createVacCardModal input[name="hidden_ch_phone"]').val('');
				$("#createVacCardModal").modal("hide");
			});

			//create vaccine card
			$('#createVacCardModal button[type="submit"]').click(function(){
				var chEmail = $.trim($('#createVacCardModal input[name="hidden_ch_email"]').val());
				var chPhone = $.trim($('#createVacCardModal input[name="hidden_ch_phone"]').val());
				var chEmailValid = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

				var chMsgHidden = '';
				if(chEmail.search(/\S/) == -1){
					chMsgHidden = 'Email cannot be left blank.';
				}else if(chEmailValid.test(chEmail)== false){
					chMsgHidden = 'Email address invalid.';
				}else if(chPhone.search(/\S/) == -1){
					chMsgHidden = 'Phone cannot be left blank.';
				}else if(chPhone.search(/^[0-9\+,\-\s\(\)]+$/) == -1){
					chMsgHidden = 'Phone number invalid.';
				} else if(chPhone.length != 10){
					chMsgHidden = 'Phone number invalid.';
				}

				clearTimeout(timer.cherrormsghidden);
				if(chMsgHidden != ""){
					$("#ch_error_msg_hidden").addClass("alert alert-danger").html(chMsgHidden).removeClass("disp-no");
					timer.cherrormsghidden = setTimeout(function(){
						$("#ch_error_msg_hidden").removeClass().addClass("disp-no").html("&nbsp;");
						timer.cherrormsghidden = 0;
					},5000);
				} else {
					$('#createVacCardModal input[name="pagename"]').val('child-vaccinations.php');
					$("#ch_error_msg_hidden").removeClass().addClass("alert alert-success").html('Creating vaccine card. Please wait...');
					return true;
				}
				return false;
			});
		}
	});
});