//UsingOpenEpi.js
//Help file as a string

//<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
//    "http://www.w3.org/TR/html4/loose.dtd">

//<html xmlns="http://www.w3.org/1999/xhtml">
//<head>
//<meta http-equiv=Content-Type content="text/html; charset=UTF-8">
//<title>Using OpenEpi</title>
var usingStr = "";
usingStr += '<style type="text/css" ><!--';
usingStr += ".Section1";
usingStr += "	{page:Section1;}";
usingStr += "-->";
usingStr += "</style>";
usingStr += '<script language="JavaScript" type="text/JavaScript">';
usingStr += "function translate()";
usingStr += "{";
usingStr += "  var errmsg;";
usingStr += "try";
usingStr += "{";
usingStr += "  if (opener!=null)";
usingStr += "     {opener.translateHTML(document);}";
usingStr += '  else if ( typeof (translateHTML)!=="undefined" )';
usingStr += "{";
usingStr += " translateHTML(document);";
usingStr += "  }";
usingStr += "}";
usingStr += "catch (err)";
usingStr += "{";
usingStr += "errmsg=err.description;";
usingStr += "}";
usingStr += "}";
usingStr += "";
usingStr += "</script>";
//usingStr+='</head>'
//usingStr+='<body bgcolor="#FFFFFF" text="#336666" link="#009999" vlink="#66CCCC" alink="#00FFFF" class="Normal" onLoad="translate();" >'
usingStr += '<table width="100%" border="0" cellspacing="0" cellpadding="4">';
usingStr += "  <tr>";
usingStr +=
  '    <td align="center" rowspan="2" bgcolor="#336666" class="Normal"> <img src="../img/OpenEpi1.gif" alt="OpenEpi Logo" name="image" width="184" height="51"></td>';
usingStr += "  </tr>";
usingStr += "</table>";
usingStr += "<div class=Section1>";
usingStr +=
  '  <h1 align=center style="text-align:center"><b><span >Using OpenEpi</span></b></h1>';
usingStr += '  <h2 align=center style="text-align:center;"><b><span';
usingStr += ">From the Web or </span></b></h2>";
usingStr += '  <h2 align=center style="text-align:center;"><b><span';
usingStr += ">On Your Desktop</span></b></h2>";
usingStr += "  <h1><b><span >From the Web</span></b></h1>";
usingStr +=
  '  <h2><span style="font-size:17.0pt">•</span> <span style="font-size:7.0pt;font-family:"Times New Roman">&nbsp;&nbsp;&nbsp;&nbsp;';
usingStr +=
  '    </span><b><span style="font-size:14.0pt">Point your browser to http://www.openepi.com/</span></b></h2>';
usingStr += '  <h2><span style="font-size:17.0pt">•</span><span';
usingStr +=
  'style="font-size:7.0pt;font-family:"Times New Roman">&nbsp;&nbsp;&nbsp;</span><b><span style="font-size:14.0pt">Choose';
usingStr +=
  "    a program, enter data or load demo data (if available), then click Calculate";
usingStr += "    to see the results</span></b></h2>";
usingStr +=
  '  <h2><span style="font-size:17.0pt">•</span><b><span style="font-size:14.0pt">&nbsp;&nbsp;&nbsp;&nbsp;Select';
usingStr +=
  "    all or part of the results by clicking and dragging with the mouse. Ctrl-C";
usingStr += "    or Edit|Copy will copy to the clipboard</span></b></h2>";
usingStr += '  <h2><span style="font-size:17.0pt">•</span><span';
usingStr +=
  'style="font-size:7.0pt;font-family:"Times New Roman">&nbsp;&nbsp;&nbsp; </span><b><span style="font-size:14.0pt">Ctrl-V';
usingStr +=
  "    or Edit|Paste in another program, such as Word or Excel</span></b></h2>";
usingStr += "  <h2><b><span >&nbsp;</span></b></h2>";
usingStr +=
  "  <h1><b><span >Download the Entire Site to Your Desktop</span></b></h1>";
usingStr += '  <h2><span style="font-size:17.0pt">•</span><span';
usingStr +=
  'style="font-size:7.0pt;font-family:"Times New Roman">&nbsp;&nbsp;&nbsp; </span><b><span style="font-size:14.0pt">Choose';
usingStr += "    Download from the menu</span></b></h2>";
usingStr += '  <h2><span style="font-size:17.0pt">•</span><span';
usingStr +=
  'style="font-size:7.0pt;font-family:"Times New Roman">&nbsp;&nbsp;&nbsp; </span><b><span style="font-size:14.0pt">Save';
usingStr += "    the zip file or open it from the web</span></b></h2>";
usingStr += '  <h2><span style="font-size:17.0pt">•</span><span';
usingStr +=
  'style="font-size:7.0pt;font-family:"Times New Roman">&nbsp;&nbsp;&nbsp; </span><b><span style="font-size:14.0pt">Unzip';
usingStr +=
  "    and leave the files in the same relative directories</span></b></h2>";
usingStr += '  <h2><span style="font-size:17.0pt">•</span><span';
usingStr +=
  'style="font-size:7.0pt;font-family:"Times New Roman">&nbsp;&nbsp;&nbsp; </span><b><span style="font-size:14.0pt">Click';
usingStr +=
  "    on Index.htm, run it from the browser, or execute it from Start|run</span></b></h2>";
usingStr += '  <h2><span style="font-size:17.0pt">•</span><span';
usingStr +=
  'style="font-size:7.0pt;font-family:"Times New Roman">&nbsp;&nbsp;<font size="3">&nbsp;';
usingStr +=
  '    </font></span><font size="3"><b><span style="font-size:14.0pt">Create a desktop';
usingStr +=
  "    icon for future use, using (in Windows) right-click and Send to | Desktop</span></b></font></h2>";
usingStr += "  <h2><b><span >&nbsp;</span></b></h2>";
usingStr += "  <h1><b><span >Choosing a Statistical Method</span></b></h1>";
usingStr +=
  '  <h2><span style="font-size:17.0pt"><font size="+1">•</font></span><font size="+1"><span';
usingStr +=
  'style="font-size:7.0pt;font-family:"Times New Roman">&nbsp;&nbsp;&nbsp;</span><b><span >If';
usingStr +=
  "    you are not sure which module to use or want further information, use the";
usingStr += "    Choosing a Method entry on the menu</span></b></font></h2>";
usingStr +=
  '  <h2><font size="+1"><span style="font-size:17.0pt">•</span><span';
usingStr +=
  'style="font-size:7.0pt;font-family:"Times New Roman">&nbsp;&nbsp;&nbsp; </span><b><span >Find';
usingStr +=
  "    the type of data you have and see what methods are appropriate</span></b></font></h2>";
usingStr +=
  '  <h2><font size="+1"><span style="font-size:17.0pt">•</span><span';
usingStr +=
  'style="font-size:7.0pt;font-family:"Times New Roman">&nbsp;&nbsp;&nbsp; </span><b><span >Each';
usingStr +=
  "    cell in the table will perform an on-line search using Google.com when you";
usingStr += "    click on the text</span></b></font></h2>";
usingStr += '  <h2><font size="+1"><b><span >&nbsp;</span></b></font></h2>';
usingStr += "  <h1><b><span >Entering Data</span></b></h1>";
usingStr += '  <h2><span style="font-size:17.0pt">•</span><span';
usingStr +=
  'style="font-size:7.0pt;font-family:"Times New Roman">&nbsp;&nbsp;&nbsp; </span><b><span style="font-size:14.0pt">In';
usingStr +=
  "    any application, choose Enter New Data to enter your own data or Load Demo";
usingStr +=
  "    Data for one of the samples described in the Exercises link</span></b></h2>";
usingStr +=
  '  <h2><span style="font-size:17.0pt">• </span><b><span style="font-size:14.0pt">If asked, give the number of columns or rows needed</span></b></h2>';
usingStr +=
  '  <h2><span style="font-size:17.0pt">• </span><b><span style="font-size:14.0pt">Use either the Enter or Tab keys, and the up and down arrow keys to move around. Movement is across the screen until the down-arrow is pressed, then vertically until the first mouse-click.</span></b></h2>';
usingStr += '  <h2><span style="font-size:17.0pt">•</span><span';
usingStr +=
  'style="font-size:7.0pt;font-family:"Times New Roman">&nbsp;&nbsp;&nbsp; </span><b><span style="font-size:14.0pt">To';
usingStr +=
  "    enter labels, variable names, or values, click on a cell and respond affirmatively";
usingStr += "    to the message</span></b></h2>";
usingStr +=
  '  <h1><b><span ><font size="+3">Saving Results</font></span></b></h1>';
usingStr +=
  '  <h2><font size="+1"><span style="font-size:17.0pt">•</span><span';
usingStr +=
  'style="font-size:7.0pt;font-family:Times New Roman">&nbsp;&nbsp;&nbsp; </span><b><span >For';
usingStr +=
  "    Windows users, a special program called OpenEpiSave.hta is provided</span></b></font></h2>";
usingStr +=
  '  <h2><font size="+1"><span style="font-size:17.0pt">•</span><span';
usingStr +=
  'style="font-size:7.0pt;font-family:"Times New Roman">&nbsp;&nbsp;&nbsp; </span><b><span >When';
usingStr +=
  "    you run OpenEpiSave.hta from your hard disk, it will bring up OpenEpiMenu";
usingStr += "    in your browser</span></b></font></h2>";
usingStr +=
  '  <h2><font size="+1"><span style="font-size:17.0pt">•</span><span';
usingStr +=
  'style="font-size:7.0pt;font-family:"Times New Roman">&nbsp;&nbsp;&nbsp; </span><b><span >The';
usingStr +=
  "    output of each program will be saved in the Results directory as an HTML file,";
usingStr +=
  "    and a notice will display briefly each time a file is saved</span></b></font></h2>";
usingStr += '  <h2><font size="+1"><b><span >&nbsp;</span></b></font></h2>';
usingStr += "  <h1><b><span >Checking with Other Programs</span></b></h1>";
usingStr += '  <h2><span style="font-size:17.0pt">•</span><span';
usingStr +=
  'style="font-size:7.0pt;font-family:"Times New Roman">&nbsp;&nbsp;&nbsp; </span><b><span style="font-size:14.0pt">When';
usingStr +=
  "    you get a dramatic result in OpenEpi (or any program), take the time to repeat";
usingStr +=
  "    the analysis in another program. There are hundreds of other calculators in";
usingStr +=
  "    a link on the menu, or use SAS, SPSS, or Epi Info.</span></b></h2>";
usingStr += '  <h2><span style="font-size:17.0pt">•</span><span';
usingStr +=
  'style="font-size:7.0pt;font-family:"Times New Roman">&nbsp;&nbsp;&nbsp; </span><b><span style="font-size:14.0pt">If';
usingStr += "    the results differ, let us know.</span></b></h2>";
usingStr += '  <h2><span style="font-size:17.0pt">•</span><span';
usingStr +=
  'style="font-size:7.0pt;font-family:"Times New Roman">&nbsp;&nbsp;&nbsp; </span><b><span style="font-size:14.0pt">If';
usingStr +=
  "    the results do not differ, also let us know! We want to build the validation";
usingStr += "    files.</span></b></h2>";
usingStr += "  <h2><b><span >&nbsp;</span></b></h2>";
usingStr += "  <h1><b><span >Enjoy and Communicate</span></b></h1>";
usingStr += '  <h2><span style="font-size:17.0pt">•</span><span';
usingStr +=
  'style="font-size:7.0pt;font-family:"Times New Roman">&nbsp;&nbsp;&nbsp; </span><b><span ><font size="+1">We';
usingStr += "    hope you enjoy using OpenEpi</font></span></b></h2>";
usingStr +=
  '  <h2><font size="+1"><span style="font-size:17.0pt">•</span><span';
usingStr +=
  'style="font-size:7.0pt;font-family:"Times New Roman">&nbsp;&nbsp;&nbsp; </span><b><span >Send';
usingStr +=
  "    us feedback with suggestions, wishes, or problems</span></b></font></h2>";
usingStr +=
  '  <h2><font size="+1"><span style="font-size:17.0pt">•</span><span';
usingStr +=
  'style="font-size:7.0pt;font-family:"Times New Roman">&nbsp;&nbsp;&nbsp; </span><b><span >If';
usingStr +=
  "    you would like to develop a program, check the developer’s section of the";
usingStr += "    menu, and also send us an email</span></b></font></h2>";
usingStr += "</div>";
