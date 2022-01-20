burger =document.querySelector('.burger')
navbar =document.querySelector('.navbar')
 navlist = document.querySelector('.nav-list')
rightnav =document.querySelector('.rightnav')


burger.addEventListener ("click", ()=>
{
 navlist.classlist.toggle('visble-resp');

}
)
burger.addEventListener ("click", ()=>
{
rightnav.classlist.toggle('visble-resp');

}
)
burger.addEventListener ("click", ()=>
{
navbar.classlist.toggle('hnav-resp');
}
)