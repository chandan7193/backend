const keys = require("../../config/keys");

// To access es6 string intepolation => ${keys.redirectDomain}

module.exports = survey => {
  return `<!doctype html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  	<head>
  		<!-- NAME: SALE ANNOUNCEMENT -->
  		<!--[if gte mso 15]>
          <xml>
              <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
  		<meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1">
  		<title>*|MC:SUBJECT|*</title>

      <style type="text/css">
  		p{
  			margin:10px 0;
  			padding:0;
  		}
  		table{
  			border-collapse:collapse;
  		}
  		h1,h2,h3,h4,h5,h6{
  			display:block;
  			margin:0;
  			padding:0;
  		}
  		img,a img{
  			border:0;
  			height:auto;
  			outline:none;
  			text-decoration:none;
  		}
  		body,#bodyTable,#bodyCell{
  			height:100%;
  			margin:0;
  			padding:0;
  			width:100%;
  		}
  		.mcnPreviewText{
  			display:none !important;
  		}
  		#outlook a{
  			padding:0;
  		}
  		img{
  			-ms-interpolation-mode:bicubic;
  		}
  		table{
  			mso-table-lspace:0pt;
  			mso-table-rspace:0pt;
  		}
  		.ReadMsgBody{
  			width:100%;
  		}
  		.ExternalClass{
  			width:100%;
  		}
  		p,a,li,td,blockquote{
  			mso-line-height-rule:exactly;
  		}
  		a[href^=tel],a[href^=sms]{
  			color:inherit;
  			cursor:default;
  			text-decoration:none;
  		}
  		p,a,li,td,body,table,blockquote{
  			-ms-text-size-adjust:100%;
  			-webkit-text-size-adjust:100%;
  		}
  		.ExternalClass,.ExternalClass p,.ExternalClass td,.ExternalClass div,.ExternalClass span,.ExternalClass font{
  			line-height:100%;
  		}
  		a[x-apple-data-detectors]{
  			color:inherit !important;
  			text-decoration:none !important;
  			font-size:inherit !important;
  			font-family:inherit !important;
  			font-weight:inherit !important;
  			line-height:inherit !important;
  		}
  		#bodyCell{
  			padding:10px;
  		}
  		.templateContainer{
  			max-width:600px !important;
  		}
  		a.mcnButton{
  			display:block;
  		}
  		.mcnImage,.mcnRetinaImage{
  			vertical-align:bottom;
  		}
  		.mcnTextContent{
  			word-break:break-word;
  		}
  		.mcnTextContent img{
  			height:auto !important;
  		}
  		.mcnDividerBlock{
  			table-layout:fixed !important;
  		}
  	/*
  	@tab Page
  	@section Background Style
  	@tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
  	*/
  		body,#bodyTable{
  			/*@editable*/background-color:#FFFFFF;
  		}
  	/*
  	@tab Page
  	@section Background Style
  	@tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
  	*/
  		#bodyCell{
  			/*@editable*/border-top:0;
  		}
  	/*
  	@tab Page
  	@section Email Border
  	@tip Set the border for your email.
  	*/
  		.templateContainer{
  			/*@editable*/border:0;
  		}
  	/*
  	@tab Page
  	@section Heading 1
  	@tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.
  	@style heading 1
  	*/
  		h1{
  			/*@editable*/color:#FFFFFF;
  			/*@editable*/font-family:Georgia;
  			/*@editable*/font-size:60px;
  			/*@editable*/font-style:normal;
  			/*@editable*/font-weight:bold;
  			/*@editable*/line-height:125%;
  			/*@editable*/letter-spacing:normal;
  			/*@editable*/text-align:center;
  		}
  	/*
  	@tab Page
  	@section Heading 2
  	@tip Set the styling for all second-level headings in your emails.
  	@style heading 2
  	*/
  		h2{
  			/*@editable*/color:#202020;
  			/*@editable*/font-family:Georgia;
  			/*@editable*/font-size:22px;
  			/*@editable*/font-style:normal;
  			/*@editable*/font-weight:bold;
  			/*@editable*/line-height:125%;
  			/*@editable*/letter-spacing:normal;
  			/*@editable*/text-align:center;
  		}
  	/*
  	@tab Page
  	@section Heading 3
  	@tip Set the styling for all third-level headings in your emails.
  	@style heading 3
  	*/
  		h3{
  			/*@editable*/color:#606060;
  			/*@editable*/font-family:Courier New;
  			/*@editable*/font-size:18px;
  			/*@editable*/font-style:normal;
  			/*@editable*/font-weight:normal;
  			/*@editable*/line-height:125%;
  			/*@editable*/letter-spacing:normal;
  			/*@editable*/text-align:center;
  		}
  	/*
  	@tab Page
  	@section Heading 4
  	@tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
  	@style heading 4
  	*/
  		h4{
  			/*@editable*/color:#202020;
  			/*@editable*/font-family:Georgia;
  			/*@editable*/font-size:18px;
  			/*@editable*/font-style:normal;
  			/*@editable*/font-weight:bold;
  			/*@editable*/line-height:125%;
  			/*@editable*/letter-spacing:normal;
  			/*@editable*/text-align:center;
  		}
  	/*
  	@tab Preheader
  	@section Preheader Style
  	@tip Set the background color and borders for your email's preheader area.
  	*/
  		#templatePreheader{
  			/*@editable*/background-color:#ffffff;
  			/*@editable*/background-image:none;
  			/*@editable*/background-repeat:no-repeat;
  			/*@editable*/background-position:center;
  			/*@editable*/background-size:cover;
  			/*@editable*/border-top:0;
  			/*@editable*/border-bottom:0;
  			/*@editable*/padding-top:9px;
  			/*@editable*/padding-bottom:9px;
  		}
  	/*
  	@tab Preheader
  	@section Preheader Text
  	@tip Set the styling for your email's preheader text. Choose a size and color that is easy to read.
  	*/
  		#templatePreheader .mcnTextContent,#templatePreheader .mcnTextContent p{
  			/*@editable*/color:#606060;
  			/*@editable*/font-family:Helvetica;
  			/*@editable*/font-size:12px;
  			/*@editable*/line-height:150%;
  			/*@editable*/text-align:left;
  		}
  	/*
  	@tab Preheader
  	@section Preheader Link
  	@tip Set the styling for your email's preheader links. Choose a color that helps them stand out from your text.
  	*/
  		#templatePreheader .mcnTextContent a,#templatePreheader .mcnTextContent p a{
  			/*@editable*/color:#606060;
  			/*@editable*/font-weight:normal;
  			/*@editable*/text-decoration:underline;
  		}
  	/*
  	@tab Header
  	@section Header Style
  	@tip Set the background color and borders for your email's header area.
  	*/
  		#templateHeader{
  			/*@editable*/background-color:#82a4a6;
  			/*@editable*/background-image:url("https://gallery.mailchimp.com/ef09da77ccaa5d2caf393feba/images/105e00ad-8b3e-43a3-b081-0e948f34cac0.jpg");
  			/*@editable*/background-repeat:no-repeat;
  			/*@editable*/background-position:center;
  			/*@editable*/background-size:cover;
  			/*@editable*/border-top:0;
  			/*@editable*/border-bottom:0;
  			/*@editable*/padding-top:80px;
  			/*@editable*/padding-bottom:80px;
  		}
  	/*
  	@tab Header
  	@section Header Text
  	@tip Set the styling for your email's header text. Choose a size and color that is easy to read.
  	*/
  		#templateHeader .mcnTextContent,#templateHeader .mcnTextContent p{
  			/*@editable*/color:#FFFFFF;
  			/*@editable*/font-family:Courier New;
  			/*@editable*/font-size:22px;
  			/*@editable*/line-height:125%;
  			/*@editable*/text-align:center;
  		}
  	/*
  	@tab Header
  	@section Header Link
  	@tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
  	*/
  		#templateHeader .mcnTextContent a,#templateHeader .mcnTextContent p a{
  			/*@editable*/color:#FFFFFF;
  			/*@editable*/font-weight:normal;
  			/*@editable*/text-decoration:underline;
  		}
  	/*
  	@tab Body
  	@section Body Style
  	@tip Set the background color and borders for your email's body area.
  	*/
  		#templateBody{
  			/*@editable*/background-color:#FFFFFF;
  			/*@editable*/background-image:none;
  			/*@editable*/background-repeat:no-repeat;
  			/*@editable*/background-position:center;
  			/*@editable*/background-size:cover;
  			/*@editable*/border-top:0;
  			/*@editable*/border-bottom:0;
  			/*@editable*/padding-top:30px;
  			/*@editable*/padding-bottom:9px;
  		}
  	/*
  	@tab Body
  	@section Body Text
  	@tip Set the styling for your email's body text. Choose a size and color that is easy to read.
  	*/
  		#templateBody .mcnTextContent,#templateBody .mcnTextContent p{
  			/*@editable*/color:#606060;
  			/*@editable*/font-family:Georgia;
  			/*@editable*/font-size:16px;
  			/*@editable*/line-height:150%;
  			/*@editable*/text-align:left;
  		}
  	/*
  	@tab Body
  	@section Body Link
  	@tip Set the styling for your email's body links. Choose a color that helps them stand out from your text.
  	*/
  		#templateBody .mcnTextContent a,#templateBody .mcnTextContent p a{
  			/*@editable*/color:#82A4A6;
  			/*@editable*/font-weight:normal;
  			/*@editable*/text-decoration:underline;
  		}
  	/*
  	@tab Columns
  	@section Column Style
  	@tip Set the background color and borders for your email's columns.
  	*/
  		#templateColumns{
  			/*@editable*/background-color:#FFFFFF;
  			/*@editable*/background-image:none;
  			/*@editable*/background-repeat:no-repeat;
  			/*@editable*/background-position:center;
  			/*@editable*/background-size:cover;
  			/*@editable*/border-top:0;
  			/*@editable*/border-bottom:0;
  			/*@editable*/padding-top:0;
  			/*@editable*/padding-bottom:40px;
  		}
  	/*
  	@tab Columns
  	@section Column Text
  	@tip Set the styling for your email's column text. Choose a size and color that is easy to read.
  	*/
  		#templateColumns .columnContainer .mcnTextContent,#templateColumns .columnContainer .mcnTextContent p{
  			/*@editable*/color:#606060;
  			/*@editable*/font-family:Georgia;
  			/*@editable*/font-size:16px;
  			/*@editable*/line-height:150%;
  			/*@editable*/text-align:left;
  		}
  	/*
  	@tab Columns
  	@section Column Link
  	@tip Set the styling for your email's column links. Choose a color that helps them stand out from your text.
  	*/
  		#templateColumns .columnContainer .mcnTextContent a,#templateColumns .columnContainer .mcnTextContent p a{
  			/*@editable*/color:#82A4A6;
  			/*@editable*/font-weight:normal;
  			/*@editable*/text-decoration:underline;
  		}
  	/*
  	@tab Footer
  	@section Footer Style
  	@tip Set the background color and borders for your email's footer area.
  	*/
  		#templateFooter{
  			/*@editable*/background-color:#ffffff;
  			/*@editable*/background-image:none;
  			/*@editable*/background-repeat:no-repeat;
  			/*@editable*/background-position:center;
  			/*@editable*/background-size:cover;
  			/*@editable*/border-top:0;
  			/*@editable*/border-bottom:0;
  			/*@editable*/padding-top:10px;
  			/*@editable*/padding-bottom:10px;
  		}
  	/*
  	@tab Footer
  	@section Footer Text
  	@tip Set the styling for your email's footer text. Choose a size and color that is easy to read.
  	*/
  		#templateFooter .mcnTextContent,#templateFooter .mcnTextContent p{
  			/*@editable*/color:#FFFFFF;
  			/*@editable*/font-family:Helvetica;
  			/*@editable*/font-size:12px;
  			/*@editable*/line-height:150%;
  			/*@editable*/text-align:center;
  		}
  	/*
  	@tab Footer
  	@section Footer Link
  	@tip Set the styling for your email's footer links. Choose a color that helps them stand out from your text.
  	*/
  		#templateFooter .mcnTextContent a,#templateFooter .mcnTextContent p a{
  			/*@editable*/color:#FFFFFF;
  			/*@editable*/font-weight:normal;
  			/*@editable*/text-decoration:underline;
  		}
  	@media only screen and (min-width:768px){
  		.templateContainer{
  			width:600px !important;
  		}

  }	@media only screen and (max-width: 480px){
  		body,table,td,p,a,li,blockquote{
  			-webkit-text-size-adjust:none !important;
  		}

  }	@media only screen and (max-width: 480px){
  		body{
  			width:100% !important;
  			min-width:100% !important;
  		}

  }	@media only screen and (max-width: 480px){
  		#bodyCell{
  			padding-top:10px !important;
  		}

  }	@media only screen and (max-width: 480px){
  		.columnWrapper{
  			max-width:100% !important;
  			width:100% !important;
  		}

  }	@media only screen and (max-width: 480px){
  		.mcnRetinaImage{
  			max-width:100% !important;
  		}

  }	@media only screen and (max-width: 480px){
  		.mcnImage{
  			width:100% !important;
  		}

  }	@media only screen and (max-width: 480px){
  		.mcnCartContainer,.mcnCaptionTopContent,.mcnRecContentContainer,.mcnCaptionBottomContent,.mcnTextContentContainer,.mcnBoxedTextContentContainer,.mcnImageGroupContentContainer,.mcnCaptionLeftTextContentContainer,.mcnCaptionRightTextContentContainer,.mcnCaptionLeftImageContentContainer,.mcnCaptionRightImageContentContainer,.mcnImageCardLeftTextContentContainer,.mcnImageCardRightTextContentContainer,.mcnImageCardLeftImageContentContainer,.mcnImageCardRightImageContentContainer{
  			max-width:100% !important;
  			width:100% !important;
  		}

  }	@media only screen and (max-width: 480px){
  		.mcnBoxedTextContentContainer{
  			min-width:100% !important;
  		}

  }	@media only screen and (max-width: 480px){
  		.mcnImageGroupContent{
  			padding:9px !important;
  		}

  }	@media only screen and (max-width: 480px){
  		.mcnCaptionLeftContentOuter .mcnTextContent,.mcnCaptionRightContentOuter .mcnTextContent{
  			padding-top:9px !important;
  		}

  }	@media only screen and (max-width: 480px){
  		.mcnImageCardTopImageContent,.mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent,.mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent{
  			padding-top:18px !important;
  		}

  }	@media only screen and (max-width: 480px){
  		.mcnImageCardBottomImageContent{
  			padding-bottom:9px !important;
  		}

  }	@media only screen and (max-width: 480px){
  		.mcnImageGroupBlockInner{
  			padding-top:0 !important;
  			padding-bottom:0 !important;
  		}

  }	@media only screen and (max-width: 480px){
  		.mcnImageGroupBlockOuter{
  			padding-top:9px !important;
  			padding-bottom:9px !important;
  		}

  }	@media only screen and (max-width: 480px){
  		.mcnTextContent,.mcnBoxedTextContentColumn{
  			padding-right:18px !important;
  			padding-left:18px !important;
  		}

  }	@media only screen and (max-width: 480px){
  		.mcnImageCardLeftImageContent,.mcnImageCardRightImageContent{
  			padding-right:18px !important;
  			padding-bottom:0 !important;
  			padding-left:18px !important;
  		}

  }	@media only screen and (max-width: 480px){
  		.mcpreview-image-uploader{
  			display:none !important;
  			width:100% !important;
  		}

  }	@media only screen and (max-width: 480px){
  	/*
  	@tab Mobile Styles
  	@section Heading 1
  	@tip Make the first-level headings larger in size for better readability on small screens.
  	*/
  		h1{
  			/*@editable*/font-size:30px !important;
  			/*@editable*/line-height:125% !important;
  		}

  }	@media only screen and (max-width: 480px){
  	/*
  	@tab Mobile Styles
  	@section Heading 2
  	@tip Make the second-level headings larger in size for better readability on small screens.
  	*/
  		h2{
  			/*@editable*/font-size:20px !important;
  			/*@editable*/line-height:125% !important;
  		}

  }	@media only screen and (max-width: 480px){
  	/*
  	@tab Mobile Styles
  	@section Heading 3
  	@tip Make the third-level headings larger in size for better readability on small screens.
  	*/
  		h3{
  			/*@editable*/font-size:16px !important;
  			/*@editable*/line-height:125% !important;
  		}

  }	@media only screen and (max-width: 480px){
  	/*
  	@tab Mobile Styles
  	@section Heading 4
  	@tip Make the fourth-level headings larger in size for better readability on small screens.
  	*/
  		h4{
  			/*@editable*/font-size:16px !important;
  			/*@editable*/line-height:150% !important;
  		}

  }	@media only screen and (max-width: 480px){
  	/*
  	@tab Mobile Styles
  	@section Boxed Text
  	@tip Make the boxed text larger in size for better readability on small screens. We recommend a font size of at least 16px.
  	*/
  		.mcnBoxedTextContentContainer .mcnTextContent,.mcnBoxedTextContentContainer .mcnTextContent p{
  			/*@editable*/font-size:14px !important;
  			/*@editable*/line-height:150% !important;
  		}

  }	@media only screen and (max-width: 480px){
  	/*
  	@tab Mobile Styles
  	@section Preheader Visibility
  	@tip Set the visibility of the email's preheader on small screens. You can hide it to save space.
  	*/
  		#templatePreheader{
  			/*@editable*/display:block !important;
  		}

  }	@media only screen and (max-width: 480px){
  	/*
  	@tab Mobile Styles
  	@section Preheader Text
  	@tip Make the preheader text larger in size for better readability on small screens.
  	*/
  		#templatePreheader .mcnTextContent,#templatePreheader .mcnTextContent p{
  			/*@editable*/font-size:14px !important;
  			/*@editable*/line-height:150% !important;
  		}

  }	@media only screen and (max-width: 480px){
  	/*
  	@tab Mobile Styles
  	@section Header Text
  	@tip Make the header text larger in size for better readability on small screens.
  	*/
  		#templateHeader .mcnTextContent,#templateHeader .mcnTextContent p{
  			/*@editable*/font-size:16px !important;
  			/*@editable*/line-height:150% !important;
  		}

  }	@media only screen and (max-width: 480px){
  	/*
  	@tab Mobile Styles
  	@section Body Text
  	@tip Make the body text larger in size for better readability on small screens. We recommend a font size of at least 16px.
  	*/
  		#templateBody .mcnTextContent,#templateBody .mcnTextContent p{
  			/*@editable*/font-size:16px !important;
  			/*@editable*/line-height:150% !important;
  		}

  }	@media only screen and (max-width: 480px){
  	/*
  	@tab Mobile Styles
  	@section Column Text
  	@tip Make the column text larger in size for better readability on small screens. We recommend a font size of at least 16px.
  	*/
  		#templateColumns .columnContainer .mcnTextContent,#templateColumns .columnContainer .mcnTextContent p{
  			/*@editable*/font-size:16px !important;
  			/*@editable*/line-height:150% !important;
  		}

  }	@media only screen and (max-width: 480px){
  	/*
  	@tab Mobile Styles
  	@section Footer Text
  	@tip Make the footer content text larger in size for better readability on small screens.
  	*/
  		#templateFooter .mcnTextContent,#templateFooter .mcnTextContent p{
  			/*@editable*/font-size:14px !important;
  			/*@editable*/line-height:150% !important;
  		}

  }</style></head>
      <body>
          <!--*|IF:MC_PREVIEW_TEXT|*-->
          <!--[if !gte mso 9]><!----><span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">10% off on 10 days Ladakh Trip: Special offer by Dogether</span><!--<![endif]-->
          <!--*|END:IF|*-->
          <center>
          <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="m_-810280443514913517bodyTable" style="border-collapse:collapse;height:100%;margin:0;padding:0;width:100%;background-color:#ffffff">
              <tbody><tr>
                  <td align="center" valign="top" id="m_-810280443514913517bodyCell" style="height:100%;margin:0;padding:10px;width:100%;border-top:0">


          <table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_-810280443514913517templateContainer" style="border-collapse:collapse;border:0;max-width:600px!important">
            <tbody><tr>
              <td valign="top" id="m_-810280443514913517templatePreheader" style="background:#ffffff none no-repeat center/cover;background-color:#ffffff;background-image:none;background-repeat:no-repeat;background-position:center;background-size:cover;border-top:0;border-bottom:0;padding-top:9px;padding-bottom:9px"></td>
            </tr>
            <tr>
              <td valign="top" id="m_-810280443514913517templateHeader" style="background:#82a4a6 url(&quot;https://ci6.googleusercontent.com/proxy/G2oKmxnddE4W3t9bokdAftGYh_rqgld5VyFV5-tTfFXXzidn-PaUikmgMB7vSCSRUVP8CKG4mrivwnjK7T5wU2T0FZZdUa1Kp82wZACIXa8tvHigBmRfeybhQv_y-PTQUHgy8_MA1kM8bNA2WmHXlt5f9zOZ_ywC-niorGM=s0-d-e1-ft#https://gallery.mailchimp.com/ef09da77ccaa5d2caf393feba/images/105e00ad-8b3e-43a3-b081-0e948f34cac0.jpg&quot;) no-repeat center/cover;background-color:#82a4a6;background-image:url(https://ci6.googleusercontent.com/proxy/G2oKmxnddE4W3t9bokdAftGYh_rqgld5VyFV5-tTfFXXzidn-PaUikmgMB7vSCSRUVP8CKG4mrivwnjK7T5wU2T0FZZdUa1Kp82wZACIXa8tvHigBmRfeybhQv_y-PTQUHgy8_MA1kM8bNA2WmHXlt5f9zOZ_ywC-niorGM=s0-d-e1-ft#https://gallery.mailchimp.com/ef09da77ccaa5d2caf393feba/images/105e00ad-8b3e-43a3-b081-0e948f34cac0.jpg);background-repeat:no-repeat;background-position:center;background-size:cover;border-top:0;border-bottom:0;padding-top:80px;padding-bottom:80px"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_-810280443514913517mcnTextBlock" style="min-width:100%;border-collapse:collapse">
  <tbody class="m_-810280443514913517mcnTextBlockOuter">
      <tr>
          <td valign="top" class="m_-810280443514913517mcnTextBlockInner" style="padding-top:9px">



              <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%;min-width:100%;border-collapse:collapse" width="100%" class="m_-810280443514913517mcnTextContentContainer">
                  <tbody><tr>

                      <td valign="top" class="m_-810280443514913517mcnTextContent" style="padding-top:0;padding-right:18px;padding-bottom:9px;padding-left:18px;word-break:break-word;color:#ffffff;font-family:Courier New;font-size:22px;line-height:125%;text-align:center">

                          <h1 style="text-align:center;display:block;margin:0;padding:0;color:#ffffff;font-family:Georgia;font-size:60px;font-style:normal;font-weight:bold;line-height:125%;letter-spacing:normal"><span style="font-family:open sans,helvetica neue,helvetica,arial,sans-serif"><span style="font-size:36px">TRIP TO LADAKH</span></span></h1>

<p style="text-align:center;margin:10px 0;padding:0;color:#ffffff;font-family:Courier New;font-size:22px;line-height:125%"><span style="font-family:open sans,helvetica neue,helvetica,arial,sans-serif"><span style="font-size:18px">10 days in Scintillating Ladakh</span></span></p>

                      </td>
                  </tr>
              </tbody></table>



          </td>
      </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_-810280443514913517mcnDividerBlock" style="min-width:100%;border-collapse:collapse;table-layout:fixed!important">
  <tbody class="m_-810280443514913517mcnDividerBlockOuter">
      <tr>
          <td class="m_-810280443514913517mcnDividerBlockInner" style="min-width:100%;padding:40px 18px 18px">
              <table class="m_-810280443514913517mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse">
                  <tbody><tr>
                      <td>
                          <span></span>
                      </td>
                  </tr>
              </tbody></table>

          </td>
      </tr>
  </tbody>
</table></td>
            </tr>
            <tr>
              <td valign="top" id="m_-810280443514913517templateBody" style="background:#ffffff none no-repeat center/cover;background-color:#ffffff;background-image:none;background-repeat:no-repeat;background-position:center;background-size:cover;border-top:0;border-bottom:0;padding-top:30px;padding-bottom:9px"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_-810280443514913517mcnCodeBlock" style="border-collapse:collapse">
  <tbody class="m_-810280443514913517mcnTextBlockOuter">
      <tr>
          <td valign="top" class="m_-810280443514913517mcnTextBlockInner">
              <div class="m_-810280443514913517mcnTextContent" style="text-align:center;word-break:break-word;color:#606060;font-family:Georgia;font-size:16px;line-height:150%"><font color="black" style="font-family:Open Sans"><b>At a special price of just <strike style="color:#ee3c48">₹25000</strike></b></font></div><font color="black" style="font-family:Open Sans"><b>
          </b></font></td>
      </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_-810280443514913517mcnTextBlock" style="min-width:100%;border-collapse:collapse">
  <tbody class="m_-810280443514913517mcnTextBlockOuter">
      <tr>
          <td valign="top" class="m_-810280443514913517mcnTextBlockInner" style="padding-top:9px">



              <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%;min-width:100%;border-collapse:collapse" width="100%" class="m_-810280443514913517mcnTextContentContainer">
                  <tbody><tr>

                      <td valign="top" class="m_-810280443514913517mcnTextContent" style="padding-top:0;padding-right:18px;padding-bottom:9px;padding-left:18px;word-break:break-word;color:#606060;font-family:Georgia;font-size:16px;line-height:150%;text-align:left">

                          <div style="text-align:center"><span style="font-size:36px"><span style="color:#000000"><strong><span style="font-family:open sans,helvetica neue,helvetica,arial,sans-serif">₹22500</span></strong></span></span><span style="font-size:16px"><span style="color:#000000"><span style="font-family:open sans,helvetica neue,helvetica,arial,sans-serif"> </span></span></span><span style="font-size:14px"><span style="color:#000000"><span style="font-family:open sans,helvetica neue,helvetica,arial,sans-serif">(10% off incl.)</span></span></span></div>

                      </td>
                  </tr>
              </tbody></table>



          </td>
      </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_-810280443514913517mcnTextBlock" style="min-width:100%;border-collapse:collapse">
  <tbody class="m_-810280443514913517mcnTextBlockOuter">
      <tr>
          <td valign="top" class="m_-810280443514913517mcnTextBlockInner" style="padding-top:9px">



              <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%;min-width:100%;border-collapse:collapse" width="100%" class="m_-810280443514913517mcnTextContentContainer">
                  <tbody><tr>

                      <td valign="top" class="m_-810280443514913517mcnTextContent" style="padding-top:0;padding-right:18px;padding-bottom:9px;padding-left:18px;word-break:break-word;color:#606060;font-family:Georgia;font-size:16px;line-height:150%;text-align:left">

                          <p style="text-align:center;margin:10px 0;padding:0;color:#606060;font-family:Georgia;font-size:16px;line-height:150%"><span style="font-family:open sans,helvetica neue,helvetica,arial,sans-serif">Experience one of the best Ladakh tour packages for 10 days and 9 nights while you're cuddled in the laps of the mighty Himalayan and Karakorum ranges, it is a destination that is beautified by contrasts! A destination that is this rich in natural bounties obviously presents sights to soothe every sore eye.&nbsp;</span></p>

                      </td>
                  </tr>
              </tbody></table>



          </td>
      </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_-810280443514913517mcnButtonBlock" style="min-width:100%;border-collapse:collapse">
  <tbody class="m_-810280443514913517mcnButtonBlockOuter">
      <tr>
          <td style="padding-top:0;padding-right:18px;padding-bottom:18px;padding-left:18px" valign="top" align="center" class="m_-810280443514913517mcnButtonBlockInner">
              <table border="0" cellpadding="0" cellspacing="0" class="m_-810280443514913517mcnButtonContentContainer" style="border-collapse:separate!important;border-radius:3px;background-color:#ee3c48">
                  <tbody>
                      <tr>
                          <td align="center" valign="middle" class="m_-810280443514913517mcnButtonContent" style="font-family:&quot;Open Sans&quot;,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif;font-size:16px;padding:15px">
                              <a class="m_-810280443514913517mcnButton" title="Let's go Ladakh" href="https://www.letsdogether.com/experiences/10-days-in-scintillating-ladakh" style="font-weight:bold;letter-spacing:normal;line-height:100%;text-align:center;text-decoration:none;color:#ffffff;display:block" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://www.letsdogether.com/experiences/10-days-in-scintillating-ladakh&amp;source=gmail&amp;ust=1526725491927000&amp;usg=AFQjCNHOjQnBqCrkMuzqsmROqEoAokLKFQ">Let's go Ladakh</a>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </td>
      </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_-810280443514913517mcnFollowBlock" style="min-width:100%;border-collapse:collapse">
  <tbody class="m_-810280443514913517mcnFollowBlockOuter">
      <tr>
          <td align="center" valign="top" style="padding:9px" class="m_-810280443514913517mcnFollowBlockInner">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_-810280443514913517mcnFollowContentContainer" style="min-width:100%;border-collapse:collapse">
  <tbody><tr>
      <td align="center" style="padding-left:9px;padding-right:9px">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse" class="m_-810280443514913517mcnFollowContent">
              <tbody><tr>
                  <td align="center" valign="top" style="padding-top:9px;padding-right:9px;padding-left:9px">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                          <tbody><tr>
                              <td align="center" valign="top">





                                          <table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;border-collapse:collapse">
                                              <tbody><tr>
                                                  <td valign="top" style="padding-right:10px;padding-bottom:9px" class="m_-810280443514913517mcnFollowContentItemContainer">
                                                      <table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_-810280443514913517mcnFollowContentItem" style="border-collapse:collapse">
                                                          <tbody><tr>
                                                              <td align="left" valign="middle" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:9px">
                                                                  <table align="left" border="0" cellpadding="0" cellspacing="0" width="" style="border-collapse:collapse">
                                                                      <tbody><tr>

                                                                              <td align="center" valign="middle" width="24" class="m_-810280443514913517mcnFollowIconContent">
                                                                                  <a href="http://instagram.com/dogether.experiences" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://instagram.com/dogether.experiences&amp;source=gmail&amp;ust=1526725491927000&amp;usg=AFQjCNGog2Xi1KcKuiinKZRl5a0bbS_2mA"><img src="https://ci4.googleusercontent.com/proxy/EdTPKl7_iK0bh0_3xZSRLGjKcjNJ5g4_q076LqwLvoTo36PV_pCmSrFbN1Kb_pmyBviArt8q_wluJJ_OfGH9kwMyOTTYzaNQ_eB-1gWbSlqfEcNtAyqwzZbHbq3fSrpCQFbi=s0-d-e1-ft#https://cdn-images.mailchimp.com/icons/social-block-v2/light-instagram-48.png" style="display:block;border:0;height:auto;outline:none;text-decoration:none" height="24" width="24" class="CToWUd"></a>
                                                                              </td>


                                                                      </tr>
                                                                  </tbody></table>
                                                              </td>
                                                          </tr>
                                                      </tbody></table>
                                                  </td>
                                              </tr>
                                          </tbody></table>






                                          <table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;border-collapse:collapse">
                                              <tbody><tr>
                                                  <td valign="top" style="padding-right:10px;padding-bottom:9px" class="m_-810280443514913517mcnFollowContentItemContainer">
                                                      <table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_-810280443514913517mcnFollowContentItem" style="border-collapse:collapse">
                                                          <tbody><tr>
                                                              <td align="left" valign="middle" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:9px">
                                                                  <table align="left" border="0" cellpadding="0" cellspacing="0" width="" style="border-collapse:collapse">
                                                                      <tbody><tr>

                                                                              <td align="center" valign="middle" width="24" class="m_-810280443514913517mcnFollowIconContent">
                                                                                  <a href="http://www.facebook.com/dogether.experiences" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://www.facebook.com/dogether.experiences&amp;source=gmail&amp;ust=1526725491927000&amp;usg=AFQjCNGnAakRfpANEk55oqe9F92-WryuHw"><img src="https://ci4.googleusercontent.com/proxy/FTY_Y2GcQoBc9F9WjcJfZbTXjZ6YKb6f1VzVtrXgp4va6YixuqJM-ldbD1Wcw_0T6xCaIPHkcoY9j6I47pYE-u-7vNGo_vvq70OOhdJmNYrP16uHAdgqPZOYkU1R5mL3ZbQ=s0-d-e1-ft#https://cdn-images.mailchimp.com/icons/social-block-v2/light-facebook-48.png" style="display:block;border:0;height:auto;outline:none;text-decoration:none" height="24" width="24" class="CToWUd"></a>
                                                                              </td>


                                                                      </tr>
                                                                  </tbody></table>
                                                              </td>
                                                          </tr>
                                                      </tbody></table>
                                                  </td>
                                              </tr>
                                          </tbody></table>






                                          <table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;border-collapse:collapse">
                                              <tbody><tr>
                                                  <td valign="top" style="padding-right:0;padding-bottom:9px" class="m_-810280443514913517mcnFollowContentItemContainer">
                                                      <table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_-810280443514913517mcnFollowContentItem" style="border-collapse:collapse">
                                                          <tbody><tr>
                                                              <td align="left" valign="middle" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:9px">
                                                                  <table align="left" border="0" cellpadding="0" cellspacing="0" width="" style="border-collapse:collapse">
                                                                      <tbody><tr>

                                                                              <td align="center" valign="middle" width="24" class="m_-810280443514913517mcnFollowIconContent">
                                                                                  <a href="http://www.letsdogether.com/share_app" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://www.letsdogether.com/share_app&amp;source=gmail&amp;ust=1526725491927000&amp;usg=AFQjCNE7saQDt7y28nX5jLyAZuvJc3WEZg"><img src="https://ci3.googleusercontent.com/proxy/0AKzxdi-dUflhfA8a2dkVPr15h5wRN5PhgVNhs8pW6mNYlLE3iohC1SMa3izgphTtE292zvIvA9U_J4CNfK4NOTywn9BXcS8oJnvm6LwPYS_VDetRz0URJUChVOBZA=s0-d-e1-ft#https://cdn-images.mailchimp.com/icons/social-block-v2/light-link-48.png" style="display:block;border:0;height:auto;outline:none;text-decoration:none" height="24" width="24" class="CToWUd"></a>
                                                                              </td>


                                                                      </tr>
                                                                  </tbody></table>
                                                              </td>
                                                          </tr>
                                                      </tbody></table>
                                                  </td>
                                              </tr>
                                          </tbody></table>




                              </td>
                          </tr>
                      </tbody></table>
                  </td>
              </tr>
          </tbody></table>
      </td>
  </tr>
</tbody></table>

          </td>
      </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_-810280443514913517mcnTextBlock" style="min-width:100%;border-collapse:collapse">
  <tbody class="m_-810280443514913517mcnTextBlockOuter">
      <tr>
          <td valign="top" class="m_-810280443514913517mcnTextBlockInner" style="padding-top:9px">



              <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%;min-width:100%;border-collapse:collapse" width="100%" class="m_-810280443514913517mcnTextContentContainer">
                  <tbody><tr>

                      <td valign="top" class="m_-810280443514913517mcnTextContent" style="padding-top:0;padding-right:18px;padding-bottom:9px;padding-left:18px;word-break:break-word;color:#606060;font-family:Georgia;font-size:16px;line-height:150%;text-align:left">

                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse">
<tbody>
  <tr>
    <td valign="top">
    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse">
      <tbody>
        <tr>
          <td style="text-align:center" valign="top">
          <div><span style="color:#d3d3d3"><span style="font-family:arial,helvetica neue,helvetica,sans-serif"><span style="font-size:12px"><em>Copyright © 2018 Dogether App Pvt. Ltd., All rights reserved.</em></span></span></span></div>
          <em><img height="49" src="https://ci3.googleusercontent.com/proxy/AGMBSdCOf9_twuA96TXy5svz8eIbJ7V7km1oQlzWNERD8F2QLCj4VDuE_VMroCuSyLsHRIFfHpHF7PI6vz6JcegeVVukTMN48Rcv-CrE29eBrD2EOYVQfP76JiKoQrjIa3EMjaXQLpXcyOLi0B8N-NPxrqNH1cOzCkY4q1Y=s0-d-e1-ft#https://gallery.mailchimp.com/ef09da77ccaa5d2caf393feba/images/4531722b-9dfc-4afb-b1d9-25c15eb50a72.png" width="300" style="border:0;height:auto!important;outline:none;text-decoration:none" class="CToWUd"></em><br>
          <span style="color:#a9a9a9"><span style="font-family:arial,helvetica neue,helvetica,sans-serif"><span style="font-size:12px">Our mailing address is<br>
          <a href="mailto:service@letsdogether.com" target="_blank">service@letsdogether.com</a></span></span></span></td>
        </tr>
      </tbody>
    </table>
    </td>
  </tr>
</tbody>
</table>

                      </td>
                  </tr>
              </tbody></table>



          </td>
      </tr>
  </tbody>
</table></td>
            </tr>
            <tr>
              <td valign="top" id="m_-810280443514913517templateColumns" style="background:#ffffff none no-repeat center/cover;background-color:#ffffff;background-image:none;background-repeat:no-repeat;background-position:center;background-size:cover;border-top:0;border-bottom:0;padding-top:0;padding-bottom:40px">

                <table align="left" border="0" cellpadding="0" cellspacing="0" width="200" class="m_-810280443514913517columnWrapper" style="border-collapse:collapse">
                  <tbody><tr>
                    <td valign="top" class="m_-810280443514913517columnContainer"></td>
                  </tr>
                </tbody></table>

                <table align="left" border="0" cellpadding="0" cellspacing="0" width="200" class="m_-810280443514913517columnWrapper" style="border-collapse:collapse">
                  <tbody><tr>
                    <td valign="top" class="m_-810280443514913517columnContainer"></td>
                  </tr>
                </tbody></table>

                <table align="left" border="0" cellpadding="0" cellspacing="0" width="200" class="m_-810280443514913517columnWrapper" style="border-collapse:collapse">
                  <tbody><tr>
                    <td valign="top" class="m_-810280443514913517columnContainer"></td>
                  </tr>
                </tbody></table>

              </td>
            </tr>
            <tr>
              <td valign="top" id="m_-810280443514913517templateFooter" style="background:#ffffff none no-repeat center/cover;background-color:#ffffff;background-image:none;background-repeat:no-repeat;background-position:center;background-size:cover;border-top:0;border-bottom:0;padding-top:10px;padding-bottom:10px"></td>
            </tr>
          </tbody></table>


                  </td>
              </tr>
          </tbody></table>
          </center>
      </body>
  </html>
`;
};
