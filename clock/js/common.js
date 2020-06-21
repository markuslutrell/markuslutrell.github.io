function displayCanvas(){
    let canvasHTML = document.getElementById('clock');
    let contextHTML = canvasHTML.getContext('2d');
    contextHTML.strokeRect(0,0,canvasHTML.width, canvasHTML.height);

    // Очистка екрану 
    contextHTML.fillStyle = "#45353c";
    contextHTML.fillRect(0,0,canvasHTML.width,canvasHTML.height);

    // Розрахунок координат центра і радіуса годинника
    let radiusClock = canvasHTML.width/2 - 10;
    let xCenterClock = canvasHTML.width/2;
    let yCenterClock = canvasHTML.height/2;
	
    // Контур годинника
    contextHTML.strokeStyle =  "#fff";
    contextHTML.lineWidth = 1;
    contextHTML.beginPath();
    contextHTML.arc(xCenterClock, yCenterClock, radiusClock, 0, 2*Math.PI, true);
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.stroke();
    contextHTML.closePath();
	
    // Поділки
    let radiusNum = radiusClock - 15; // Радіус положення стрілок
    let radiusPoint;
    for (let tm = 0; tm < 60; tm++) {
        contextHTML.beginPath();
        if(tm % 5 == 0) {
            radiusPoint = 4;}else{radiusPoint = .8;
        }
        let yPointM = yCenterClock - radiusNum * Math.sin(-6*tm*(Math.PI/180) + Math.PI/2);
        let xPointM = xCenterClock + radiusNum * Math.cos(-6*tm*(Math.PI/180) + Math.PI/2);
        contextHTML.arc(xPointM, yPointM, radiusPoint, 0, 2*Math.PI, true);
        contextHTML.stroke();
        contextHTML.closePath();
    } 
	
    // Цифри
    for(let th = 1; th <= 12; th++){
	contextHTML.beginPath();
	contextHTML.font = 'bold 25px Arial';
	let xText = xCenterClock + (radiusNum - 30) * Math.cos(-30*th*(Math.PI/180) + Math.PI/2);
	let yText = yCenterClock - (radiusNum - 30) * Math.sin(-30*th*(Math.PI/180) + Math.PI/2);
	if(th <= 9) {
		contextHTML.strokeText(th, xText - 5 , yText + 10);
	} else{
		contextHTML.strokeText(th, xText - 15 , yText + 10);
	}
    contextHTML.stroke();
	contextHTML.closePath();	
    }

	
    // Стрілки
    let secondsLength = radiusNum - 40;
    let minutesLength = radiusNum - 45;
    let hoursLength = minutesLength / 1.4;
    let d = new Date(); // Отримуємо дату
    let secondsAngle = 6*d.getSeconds(); // Кут для секунд
    let minutesAngle = 6*(d.getMinutes() + (1/60)*d.getSeconds()); // Кут для хвилин
    let hoursAngle = 30*(d.getHours() + (1/60)*d.getMinutes()); // Кут для годин
	
    // Секунди
    contextHTML.beginPath();
    contextHTML.strokeStyle =  "#91d9fa";
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(xCenterClock + secondsLength*Math.cos(Math.PI/2 - secondsAngle*(Math.PI/180)),
	yCenterClock - secondsLength*Math.sin(Math.PI/2 - secondsAngle*(Math.PI/180)));
    contextHTML.stroke();
    contextHTML.closePath();

    // Хвилини
    contextHTML.beginPath();
    contextHTML.strokeStyle =  "#000000";
    contextHTML.lineWidth = 3;
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(xCenterClock + minutesLength*Math.cos(Math.PI/2 - minutesAngle*(Math.PI/180)),
	yCenterClock - minutesLength*Math.sin(Math.PI/2 - minutesAngle*(Math.PI/180)));
    contextHTML.stroke();
    contextHTML.closePath();

    // Години
    contextHTML.beginPath();
    contextHTML.lineWidth = 5;
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(xCenterClock + hoursLength*Math.cos(Math.PI/2 - hoursAngle*(Math.PI/180)),
	yCenterClock - hoursLength*Math.sin(Math.PI/2 - hoursAngle*(Math.PI/180)));
    contextHTML.stroke();
    contextHTML.closePath();	
	
    // Центр годинника
    contextHTML.beginPath();
    contextHTML.strokeStyle =  "#fff";
    contextHTML.fillStyle = "#ffffff";
    contextHTML.lineWidth = 4;
    contextHTML.arc(xCenterClock, yCenterClock, 5, 0, 2*Math.PI, true);
    contextHTML.stroke();
    contextHTML.fill();
    contextHTML.closePath();
	  
    return;
}


window.onload = function(){
    displayCanvas();
    window.setInterval(
	function(){
		let d = new Date();
		displayCanvas();
	}, 1000);
}