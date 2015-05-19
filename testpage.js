<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../favicon.ico">

    <title></title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="starter-template.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="../assets/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body onload="handleTest();">

    <div class="container-fluid">
		
	  <br>
	  <br>
	  
	      <div class="form-group">
		<div class="col-lg-10 text-center container-fluid">
		  <input style="text-align: center;font-size: 25pt;height:50px;" autoautocomplete="off" id="wordSubmission" class="btn-block btn-large" type="text" onkeydown="if (event.keyCode == 13) document.getElementById('submitSpell').click()">
		</div>
	      </div>
	  
	  <br>
	    
	  <button id="submitSpell" onclick="wordSubmitted();" class="btn btn-block btn-large"><img class="img-responsive" src="img/sm-gr-arw.png"></img></button>
	<button id="replay" onclick="playAudioFile(wordList[currentWordIndex]);" class="btn btn-block btn-large"><img class="img-responsive" src="img/sm-gr-arw.png"></img></button>
	  <br>
	  <div id="imageContainer">
	    
	  </div>
    </div>
	
     <!-- /container -->

    <!-- Le javascript
    ================================================== -->
    <script src="testpage.js"></script>
    <!-- Placed at the end of the document so the pages load faster -->
    <!--
    <script src="assets/js/jquery.js"></script>
    <script src="assets/js/bootstrap-transition.js"></script>
    <script src="assets/js/bootstrap-alert.js"></script>
    <script src="assets/js/bootstrap-modal.js"></script>
    <script src="assets/js/bootstrap-dropdown.js"></script>
    <script src="assets/js/bootstrap-scrollspy.js"></script>
    <script src="assets/js/bootstrap-tab.js"></script>
    <script src="assets/js/bootstrap-tooltip.js"></script>
    <script src="assets/js/bootstrap-popover.js"></script>
    <script src="assets/js/bootstrap-button.js"></script>
    <script src="assets/js/bootstrap-collapse.js"></script>
    <script src="assets/js/bootstrap-carousel.js"></script>
    <script src="assets/js/bootstrap-typeahead.js"></script>
	-->
  </body>
</html>
