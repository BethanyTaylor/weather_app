window.onload = function changeTemp(){
	var svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="266px" height="418px" viewBox="0 0 266 418" enable-background="new 0 0 266 418" xml:space="preserve">		<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="136.4629" y1="12.2759" x2="136.4629" y2="402.3862">			<stop offset="0" style="stop-color:#F1613C"/>			<stop offset="0.5098" style="stop-color:#F47824"/>			<stop offset="1" style="stop-color:#F7921E"/>		</linearGradient>		<rect x="15.584"y="12.276" fill="url(#SVGID_1_)" width="241.759" height="390.11"/>		<circle fill="none" stroke="#FFFFFF stroke-miterlimit="10" cx="212.713" cy="354.726" r="32.263"/>		<circle fill="none" stroke="#FFFFFF" stroke-miterlimit="10" cx="137.268" cy="354.726" r="32.263"/>		<circle fill="none" stroke="#FFFFFF" stroke-miterlimit="10" cx="60.821" cy="354.726" r="32.263"/>		<path fill="#FFFFFF" d="M73.325,349.773l-3.769-2.115l1.119,23.814H50.681l1.114-23.814l-3.764,2.115l-2.881-6.384l7.278-4.236  l0.069-0.017c0.457,0.39,3.329,2.721,7.301,3.02c0.148,0.017,0.301,0.027,0.459,0.027c0.284,0.016,0.568,0.016,0.842,0  c0.158,0,0.311-0.01,0.457-0.027c3.968-0.299,6.84-2.63,7.297-3.02l0.069,0.011l7.278,4.242L73.325,349.773z"/>		<rect x="14.789" y="10.606" opacity="0.1" fill="#FFFFFF" width="242.105" height="48.421"/>		<text transform="matrix(1 0 0 1 103.3643 43.9434)" fill="#FFFFFF" font-family="\'HelveticaNeue-UltraLight\'" font-size="18.9483">Rexburg</text> 		<text transform="matrix(1 0 0 1 31.9512 268.0166)"><tspan x="0" y="0" fill="#FFFFFF" font-family="\'HelveticaNeue-Medium\'" font-size="38" letter-spacing="1">Kill it</tspan><tspan x="0" y="35" fill="#FFFFFF" font-family="\'HelveticaNeue-Medium\'" font-size="38" letter-spacing="1">today. </tspan></text>		<line fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2.375" stroke-linecap="round" stroke-miterlimit="10" x1="26.947" y1="30.202" x2="47.135" y2="30.202"/>		<line fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="233.041" y1="30.867" x2="233.041" y2="44.367"/>		<line fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="239.791" y1="37.617" x2="226.291" y2="37.617"/>		<line fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2.375" stroke-linecap="round" stroke-miterlimit="10" x1="26.947" y1="36.536" x2="47.135" y2="36.536"/>		<line fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2.375" stroke-linecap="round" stroke-miterlimit="10" x1="26.947" y1="42.869" x2="47.135" y2="42.869"/>		<path fill="#FFFFFF" d="M147.36,330.12l-0.772,50.229l-8.086,0.773l-0.764-37.34c-0.703,0-1.35,0-1.35,0l-0.762,37.34l-8.086-0.773  l-0.773-50.229C136.966,330.398,147.36,330.12,147.36,330.12z"/>		<path fill="#FFFFFF" d="M210.463,358.228c0-0.01,0-0.02-0.01-0.03c-0.07-0.32-0.141-0.66-0.17-1.02v-0.03  c-0.04-0.33-0.061-0.68-0.061-1.03c0-0.32,0.021-0.62,0.051-0.92c0-0.01,0-0.01,0-0.02c0-0.11,0.02-0.22,0.029-0.33  c0.03-0.18,0.061-0.35,0.09-0.52c0.021-0.11,0.041-0.21,0.07-0.31c0.02-0.04,0.02-0.08,0.02-0.13c0.03-0.27,0.041-0.55,0.041-0.83  c0-0.22-0.011-0.44-0.021-0.65c-0.01-0.11-0.021-0.21-0.03-0.31c-0.02-0.19-0.039-0.38-0.07-0.57c-0.01-0.03-0.01-0.06-0.02-0.08  c-0.029-0.2-0.07-0.4-0.13-0.59c-0.05-0.24-0.12-0.47-0.2-0.69c-0.029-0.12-0.08-0.24-0.13-0.35c-0.01-0.04-0.021-0.07-0.04-0.1  c-0.061-0.14-0.12-0.28-0.189-0.42c-0.181-0.36-0.391-0.68-0.61-0.96c-0.06-0.07-0.12-0.13-0.181-0.2  c-0.06-0.07-0.129-0.14-0.199-0.2s-0.131-0.12-0.2-0.18c-0.13-0.1-0.26-0.19-0.399-0.27c-0.08-0.05-0.17-0.09-0.261-0.13  c-0.069-0.04-0.149-0.07-0.229-0.09c-0.03-0.01-0.061-0.02-0.09-0.03c-0.07-0.02-0.15-0.04-0.23-0.05  c-0.02-0.01-0.03-0.01-0.04-0.01c-0.11-0.02-0.229-0.03-0.34-0.03c-0.011,0-0.011,0-0.021,0h-0.01c-0.109,0-0.23,0.01-0.34,0.03  c-0.01,0-0.03,0-0.04,0.01c-0.08,0.01-0.149,0.03-0.229,0.05c-0.03,0-0.061,0.01-0.09,0.03c-0.08,0.02-0.16,0.05-0.23,0.09  c-0.09,0.03-0.17,0.07-0.26,0.13c-0.121,0.07-0.24,0.15-0.36,0.25c-0.37,0.27-0.7,0.66-0.979,1.12c-0.11,0.18-0.221,0.37-0.311,0.57  c-0.1,0.2-0.189,0.41-0.27,0.64c-0.16,0.43-0.28,0.89-0.36,1.38c-0.011,0.02-0.011,0.05-0.021,0.08c-0.029,0.19-0.05,0.38-0.07,0.57  c-0.01,0.1-0.02,0.2-0.029,0.31c-0.01,0.21-0.02,0.43-0.02,0.65c0,0.28,0.01,0.56,0.039,0.83c0,0.05,0,0.09,0.021,0.13  c0.03,0.1,0.05,0.2,0.069,0.31c0.031,0.17,0.061,0.34,0.091,0.52c0.01,0.11,0.03,0.22,0.03,0.33c0,0.01,0,0.01,0,0.02  c0.029,0.3,0.049,0.6,0.049,0.92c0,0.35-0.02,0.7-0.06,1.03v0.03c-0.03,0.36-0.1,0.7-0.17,1.02c-0.01,0.01-0.01,0.02-0.01,0.03  c-0.011,0.02-0.011,0.04,0,0.06c-0.021,0.1-0.03,0.2-0.03,0.3c-0.02,0.21-0.029,0.43-0.029,0.65c0,0.22,0.01,0.44,0.02,0.65  c0.01,0.11,0.02,0.21,0.029,0.31c0.021,0.19,0.041,0.38,0.07,0.57c0.01,0.03,0.01,0.06,0.021,0.08c0.08,0.49,0.2,0.95,0.36,1.38  c0.08,0.23,0.17,0.44,0.27,0.64c0.09,0.2,0.2,0.39,0.311,0.57c0.279,0.46,0.609,0.85,0.979,1.13c0.12,0.09,0.239,0.17,0.36,0.24  c0.09,0.06,0.17,0.1,0.26,0.13c0.07,0.04,0.15,0.07,0.23,0.09c0.029,0.02,0.06,0.03,0.09,0.03c0.08,0.02,0.149,0.04,0.229,0.06h0.04  c0.109,0.02,0.23,0.03,0.34,0.03h0.01c0.01,0,0.01,0,0.021,0c0.11,0,0.229-0.01,0.34-0.03h0.04c0.08-0.02,0.16-0.04,0.23-0.06  c0.029-0.01,0.06-0.02,0.09-0.03c0.08-0.02,0.16-0.05,0.229-0.09c0.091-0.04,0.181-0.08,0.261-0.13c0.14-0.08,0.27-0.17,0.399-0.27  c0.069-0.06,0.13-0.12,0.2-0.18c0.13-0.12,0.26-0.26,0.38-0.4c0.22-0.28,0.43-0.6,0.61-0.96c0.069-0.14,0.129-0.28,0.189-0.42  c0.02-0.03,0.03-0.06,0.04-0.1c0.05-0.11,0.101-0.23,0.13-0.35c0.08-0.22,0.15-0.45,0.2-0.69c0.06-0.19,0.101-0.39,0.13-0.59  c0.01-0.02,0.01-0.05,0.02-0.08c0.031-0.19,0.051-0.38,0.07-0.57c0.01-0.1,0.021-0.2,0.03-0.31c0.01-0.21,0.021-0.43,0.021-0.65  c0-0.27-0.011-0.53-0.041-0.79C210.482,358.377,210.473,358.297,210.463,358.228z M206.963,364.188c-1.52,0-2.75-1.62-2.75-3.61  c0-1.99,1.23-3.6,2.75-3.6s2.75,1.61,2.75,3.6C209.713,362.567,208.482,364.188,206.963,364.188z"/>		<path fill="#FFFFFF" d="M222.462,358.228c0-0.01,0-0.02-0.01-0.03c-0.07-0.32-0.14-0.66-0.171-1.02v-0.03  c-0.039-0.33-0.059-0.68-0.059-1.03c0-0.32,0.02-0.62,0.049-0.92c0-0.01,0-0.01,0-0.02c0-0.11,0.021-0.22,0.03-0.33  c0.03-0.18,0.06-0.35,0.091-0.52c0.02-0.11,0.039-0.21,0.069-0.31c0.021-0.04,0.021-0.08,0.021-0.13  c0.029-0.27,0.039-0.55,0.039-0.83c0-0.22-0.01-0.44-0.02-0.65c-0.01-0.11-0.02-0.21-0.029-0.31c-0.021-0.19-0.041-0.38-0.07-0.57  c-0.01-0.03-0.01-0.06-0.021-0.08c-0.03-0.2-0.069-0.4-0.13-0.59c-0.05-0.24-0.12-0.47-0.2-0.69c-0.03-0.12-0.079-0.24-0.13-0.35  c-0.01-0.04-0.02-0.07-0.04-0.1c-0.06-0.14-0.12-0.28-0.19-0.42c-0.18-0.36-0.39-0.68-0.609-0.96c-0.061-0.07-0.12-0.13-0.18-0.2  c-0.061-0.07-0.131-0.14-0.2-0.2c-0.07-0.06-0.13-0.12-0.2-0.18c-0.13-0.1-0.26-0.19-0.4-0.27c-0.08-0.05-0.17-0.09-0.26-0.13  c-0.07-0.04-0.15-0.07-0.23-0.09c-0.029-0.01-0.06-0.02-0.09-0.03c-0.069-0.02-0.149-0.04-0.229-0.05  c-0.021-0.01-0.03-0.01-0.04-0.01c-0.109-0.02-0.23-0.03-0.34-0.03c-0.01,0-0.01,0-0.02,0h-0.011c-0.11,0-0.229,0.01-0.34,0.03  c-0.011,0-0.03,0-0.04,0.01c-0.08,0.01-0.15,0.03-0.23,0.05c-0.029,0-0.06,0.01-0.09,0.03c-0.08,0.02-0.16,0.05-0.229,0.09  c-0.091,0.03-0.171,0.07-0.261,0.13c-0.119,0.07-0.239,0.15-0.359,0.25c-0.37,0.27-0.7,0.66-0.98,1.12  c-0.109,0.18-0.22,0.37-0.31,0.57c-0.101,0.2-0.19,0.41-0.271,0.64c-0.16,0.43-0.279,0.89-0.359,1.38  c-0.01,0.02-0.01,0.05-0.02,0.08c-0.031,0.19-0.051,0.38-0.07,0.57c-0.01,0.1-0.021,0.2-0.03,0.31  c-0.011,0.21-0.021,0.43-0.021,0.65c0,0.28,0.01,0.56,0.041,0.83c0,0.05,0,0.09,0.02,0.13c0.029,0.1,0.05,0.2,0.07,0.31  c0.029,0.17,0.06,0.34,0.09,0.52c0.01,0.11,0.029,0.22,0.029,0.33c0,0.01,0,0.01,0,0.02c0.03,0.3,0.051,0.6,0.051,0.92  c0,0.35-0.021,0.7-0.061,1.03v0.03c-0.029,0.36-0.1,0.7-0.17,1.02c-0.01,0.01-0.01,0.02-0.01,0.03c-0.01,0.02-0.01,0.04,0,0.06  c-0.02,0.1-0.03,0.2-0.03,0.3c-0.021,0.21-0.03,0.43-0.03,0.65c0,0.22,0.01,0.44,0.021,0.65c0.01,0.11,0.021,0.21,0.03,0.31  c0.02,0.19,0.039,0.38,0.07,0.57c0.01,0.03,0.01,0.06,0.02,0.08c0.08,0.49,0.199,0.95,0.359,1.38c0.08,0.23,0.17,0.44,0.271,0.64  c0.09,0.2,0.2,0.39,0.31,0.57c0.28,0.46,0.61,0.85,0.98,1.13c0.12,0.09,0.24,0.17,0.359,0.24c0.09,0.06,0.17,0.1,0.261,0.13  c0.069,0.04,0.149,0.07,0.229,0.09c0.03,0.02,0.061,0.03,0.09,0.03c0.08,0.02,0.15,0.04,0.23,0.06h0.04  c0.11,0.02,0.229,0.03,0.34,0.03h0.011c0.01,0,0.01,0,0.02,0c0.109,0,0.23-0.01,0.34-0.03h0.04c0.08-0.02,0.16-0.04,0.229-0.06  c0.03-0.01,0.061-0.02,0.09-0.03c0.08-0.02,0.16-0.05,0.23-0.09c0.09-0.04,0.18-0.08,0.26-0.13c0.141-0.08,0.271-0.17,0.4-0.27  c0.07-0.06,0.13-0.12,0.2-0.18c0.13-0.12,0.26-0.26,0.38-0.4c0.22-0.28,0.43-0.6,0.609-0.96c0.07-0.14,0.131-0.28,0.19-0.42  c0.021-0.03,0.03-0.06,0.04-0.1c0.051-0.11,0.1-0.23,0.13-0.35c0.08-0.22,0.15-0.45,0.2-0.69c0.061-0.19,0.1-0.39,0.13-0.59  c0.011-0.02,0.011-0.05,0.021-0.08c0.029-0.19,0.05-0.38,0.07-0.57c0.01-0.1,0.02-0.2,0.029-0.31c0.01-0.21,0.02-0.43,0.02-0.65  c0-0.27-0.01-0.53-0.039-0.79C222.482,358.377,222.473,358.297,222.462,358.228z M218.962,364.188c-1.521,0-2.75-1.62-2.75-3.61  c0-1.99,1.229-3.6,2.75-3.6s2.75,1.61,2.75,3.6C221.712,362.567,220.482,364.188,218.962,364.188z"/>		<text transform="matrix(1 0 0 1 102.1406 165.791)" fill="#FFFFFF" font-family="\'HelveticaNeue-UltraLight\'" font-size="49.7158">%{temp}</text>		<circle fill="none" stroke="#FFFFFF" stroke-width="0.8689" stroke-miterlimit="10" cx="162.611" cy="135.66" r="4.055"/>		<g>	<circle fill="none" stroke="#FFFFFF" stroke-width="1.244" stroke-miterlimit="10" cx="132.898" cy="148.209" r="49.76"/>				<line fill="none" stroke="#FFFFFF" stroke-width="1.2439" stroke-linecap="round" stroke-miterlimit="10" x1="131.914" y1="74.211" x2="131.914" y2="90.875"/>				<line fill="none" stroke="#FFFFFF" stroke-width="1.2439" stroke-linecap="round" stroke-miterlimit="10" x1="94.762" y1="84.746" x2="103.094" y2="99.176"/>				<line fill="none" stroke="#FFFFFF" stroke-width="1.2439" stroke-linecap="round" stroke-miterlimit="10" x1="67.855" y1="112.445" x2="82.287" y2="120.776"/>				<line fill="none" stroke="#FFFFFF" stroke-width="1.2439" stroke-linecap="round" stroke-miterlimit="10" x1="58.402" y1="149.885" x2="75.066" y2="149.885"/>				<line fill="none" stroke="#FFFFFF" stroke-width="1.2439" stroke-linecap="round" stroke-miterlimit="10" x1="68.938" y1="187.036" x2="83.368" y2="178.705"/>				<line fill="none" stroke="#FFFFFF" stroke-width="1.2439" stroke-linecap="round" stroke-miterlimit="10" x1="96.636" y1="213.942" x2="104.967" y2="199.511"/>				<line fill="none" stroke="#FFFFFF" stroke-width="1.2439" stroke-linecap="round" stroke-miterlimit="10" x1="134.076" y1="223.395" x2="134.076" y2="206.731"/>				<line fill="none" stroke="#FFFFFF" stroke-width="1.2439" stroke-linecap="round" stroke-miterlimit="10" x1="171.227" y1="212.861" x2="162.895" y2="198.429"/>				<line fill="none" stroke="#FFFFFF" stroke-width="1.2439" stroke-linecap="round" stroke-miterlimit="10" x1="198.133" y1="185.163" x2="183.701" y2="176.831"/>				<line fill="none" stroke="#FFFFFF" stroke-width="1.2439" stroke-linecap="round" stroke-miterlimit="10" x1="207.585" y1="147.723" x2="190.922" y2="147.721"/>				<line fill="none" stroke="#FFFFFF" stroke-width="1.2439" stroke-linecap="round" stroke-miterlimit="10" x1="197.051" y1="110.573" x2="182.619" y2="118.903"/>				<line fill="none" stroke="#FFFFFF" stroke-width="1.2439" stroke-linecap="round" stroke-miterlimit="10" x1="169.354" y1="83.667" x2="161.021" y2="98.097"/>		</g>	</svg>';
	document.getElementById('temp').innerHTML = svg.replace('%{temp}', 95);
	document.getElementById('desc').innerHTML = svg.replace('%{desc})', 'Go get em!');
}