var menu = document.querySelector('.menuu') as HTMLElement;
var hamburger = document.querySelector('.hamburger') as HTMLDivElement;
var showAnnounce= document.querySelector('.announce') as HTMLDivElement;
var showAlert = document.querySelector('.alertt') as HTMLDivElement;

var menuToggle=document.querySelector('.menu-toggle') as HTMLDivElement;
menuToggle.addEventListener('click', function() {
    
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');

  });
  
  var alertNot=document.querySelector('#alert') as HTMLImageElement;
  alertNot.addEventListener('click', function(event) {
    
    var alertNumber=document.getElementById('alertNum') as HTMLSpanElement;
    

    alertNumber.classList.add('invisible');
    showAlert.classList.toggle('alert_active');
    

    event.stopPropagation();
    showAnnounce.classList.remove('alert_active');
    menu.classList.remove('active');
    hamburger.classList.remove('active');
  });

  var announcement=document.getElementById('announcement') as HTMLImageElement;
  announcement.addEventListener('click', function(event){
    
    var announceNum=document.getElementById('announceNum') as HTMLSpanElement;
    

    announceNum.classList.add('invisible');
    showAnnounce.classList.toggle('alert_active');

    event.stopPropagation();
    showAlert.classList.remove('alert_active');
    menu.classList.remove('active');
    hamburger.classList.remove('active');
  });

  document.addEventListener('click', function(event: MouseEvent) {
    
    if(!showAnnounce.contains(event.target as Node)){
      showAnnounce.classList.remove('alert_active');
    }
    if(!showAlert.contains(event.target as Node)){
      showAlert.classList.remove('alert_active');
    }

    if(!hamburger.contains(event.target as Node) && !menu.contains(event.target as Node)){
      menu.classList.remove('active');
      hamburger.classList.remove('active');
    }
    
    
  });

const container= document.getElementById('container') as HTMLDivElement;

fetch('./dashboard.json')
  .then((response) => response.json())
  .then((data) => Render(data));

const Render = (contents: any[]) =>{
  contents.forEach((content)=>{
    const cards=`
    <div class="c2"  ${content.isExpired? `id="special"`: ``}>
      ${content.isExpired? `<span class="expire">EXPIRED</span>` : ``}
        <div class="card-content">
          
            <img class="title-image" src= ${content.courseImg} alt="">
            
                <div class="inner-content">
                    <div class="content-1">
                        <p class="course-title">${content.courseTitle}</p>
                        <img class="favorite" src=${content.starImg} alt="">
                    </div>
                    
                    <div class="content-3">
                        <p class="sub">${content.subject}</p>
                        <div class="v2"></div>
                        <p  class="sub">Grade&nbsp</p>
                        <p  class="sub">${content.grade}</p>
                        <p  class="sub">&nbsp+</p>
                      
                        <p  class="extend">${content.level}</p>
                    </div>
                    <div class="content-3">
                        <p class="num">${content.units}</p>
                        <p class="info">Units</p>
                        <p  class="num">${content.lessons}</p>
                        <p class="info">Lessons</p>
                        <p  class="num">${content.topics}</p>
                        <p class="info">Topics</p>
                    </div>
  
                    <div class="auth">
                        <select id="districts" name="districts" class="auth-name" >
                            <option value="" disabled selected>Select Classes</option>
                            <option value="Mr. Frank's Class A">${content.authName[0]}</option>
                            <option value="Mr. Frank's Class B">${content.authName[1]}</option>
                            <option value="All Classes">${content.authName[2]}</option>
                            <option value="No Classes">${content.authName[3]}</option>
                        </select>
                    </div>
  
                    <div class="content-3">
                        ${content.students==null? `` : `<p class="sub">${content.students}</p>`}
                        ${content.students==null? `` : `<p class="sub">&nbspStudents</p>`}
                        ${content.startDate==null? ``:`<div class="v2"></div> <p  class="sub">${content.startDate} - ${content.endDate}</p>`}
                    </div>
                </div>
            
        </div>
        <div class="card-footer">
            
            <img  ${content.preview? `class="blur"`: ``} style="height: 30px;" src="../Assets/icons/preview.svg" alt="">
            <img  ${content.course? `class="blur"`: ``} style="height: 25px;" src="../Assets/icons/manage course.svg" alt="">
            <img  ${content.submissions? `class="blur"`: ``} style="height: 25px;" src="../Assets/icons/grade submissions.svg" alt="">
            <img  ${content.reports? `class="blur"`: ``} style="height: 30px;" src="../Assets/icons/reports.svg" alt="">
            
        </div>
        </div>
    `;
    
    container.insertAdjacentHTML('beforeend', cards);
    
  })
}










  