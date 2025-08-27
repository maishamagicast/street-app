from extensions import db
from models.ngo_model import NGO
from app import create_app

app = create_app()

ngo_data = [
    {
        "name": "Kenya Red Cross Society",
        "description": "Humanitarian organization providing emergency assistance and disaster relief.",
        "email": "info@redcross.or.ke",
        "phone": "+254 20 2715800",
        "address": "Red Cross Road, Nairobi, Kenya",
        "website": "https://www.redcross.or.ke/"
    },
    {
        "name": "Amref Health Africa",
        "description": "Leading health NGO in Africa focusing on community health.",
        "email": "info@amref.org",
        "phone": "+254 20 6992000",
        "address": "Runda, Nairobi, Kenya",
        "website": "https://amref.org/"
    },
{
    "name": "Made in the Streets",
    "email": "info@madeinthestreets.org",
    "phone": "+254 20 555 555",
    "address": "Eastleigh, Nairobi, Kenya",
    "website": "https://www.madeinthestreets.org/"
  },
  {
    "name": "Undugu Society of Kenya",
    "email": "info@undugu.org",
    "phone": "+254 20 222 2222",
    "address": "Nairobi, Kenya",
    "website": "https://familyforeverychild.org/alliance-members/undugu-society-of-kenya/"
  },
  {
    "name": "Afrika (African Child Trust)",
    "email": "info@afrikatrust.org",
    "phone": "+254 20 333 3333",
    "address": "Nairobi, Kenya",
    "website": "https://africanchildtrust.org.uk/transforming-lives-of-kenyas-street-children/"
  },
  {
    "name": "Bethsaida Community Foundation",
    "email": "info@besahemi.org",
    "phone": "+254 20 444 4444",
    "address": "Nairobi, Kenya",
    "website": "http://www.besahemi.org/"
  },
  {
    "name": "Good Neighbors Kenya",
    "email": "info@goodneighbors.org",
    "phone": "+254 20 555 5555",
    "address": "Korogocho, Nairobi, Kenya",
    "website": "https://www.goodneighbors.org/country/kenya/"
  },
  {
    "name": "Wema Centre",
    "email": "info@wemacentre.org",
    "phone": "+254 20 666 6666",
    "address": "Nairobi, Kenya",
    "website": "https://www.globalgiving.org/projects/wemacentre/"
  },
  {
    "name": "Vision Bearerz",
    "email": "info@visionbearerz.org",
    "phone": "+254 20 777 7777",
    "address": "Mathare, Nairobi, Kenya",
    "website": "https://apnews.com/article/58259e3100c7f8f2da9f5239b8a6a9de"
  },
  {
    "name": "Karen Street Children's Trust",
    "email": "info@karenstreetchildren.org",
    "phone": "+254 20 888 8888",
    "address": "Karen, Nairobi, Kenya",
    "website": "https://www.developmentaid.org/organizations/view/401445/karen-street-boys-trust"
  },

    {
    "name": "Street Children International - Kenya Chapter",
    "email": "info@streetchildren.org",
    "phone": "+254 20 123 4567",
    "address": "Nairobi, Kenya",
    "website": "https://www.streetchildren.org/"
  },
  {
    "name": "Center for Health and Hope",
    "email": "centerforhealthandhope@gmail.com",
    "phone": "+254 20 999 9999",
    "address": "Nairobi, Kenya",
    "website": "https://www.centerforhealthandhope.org/street-children"
  },
  {
    "name": "Hope Worldwide Kenya",
    "email": "info@hopewwkenya.org",
    "phone": "+254 20 112 2333",
    "address": "Nairobi, Kenya",
    "website": "https://hopewwkenya.org/"
  },
  {
    "name": "Childline Kenya",
    "email": "info@childlinekenya.co.ke",
    "phone": "+254 711 111111",
    "address": "Nairobi, Kenya",
    "website": "https://www.childlinekenya.co.ke/"
  },
  {
    "name": "Shining Hope for Communities (SHOFCO)",
    "email": "info@shofco.org",
    "phone": "+254 20 444 5678",
    "address": "Kibera, Nairobi, Kenya",
    "website": "https://www.shofco.org/"
  },
  {
    "name": "Uweza Foundation",
    "email": "info@uwezafoundation.org",
    "phone": "+254 20 333 7890",
    "address": "Kibera, Nairobi, Kenya",
    "website": "https://www.uwezafoundation.org/"
  },
  {
    "name": "Hands of Hope Foundation",
    "email": "info@handsofhopekenya.org",
    "phone": "+254 20 555 6789",
    "address": "Nairobi, Kenya",
    "website": "https://handsofhopekenya.org/"
  },
  {
    "name": "Street Kids International Kenya",
    "email": "info@skikenya.org",
    "phone": "+254 20 666 7890",
    "address": "Nairobi, Kenya",
    "website": "https://www.skikenya.org/"
  },
  {
    "name": "Rehabilitation of Street Children (RSC)",
    "email": "info@rsckenya.org",
    "phone": "+254 20 777 8901",
    "address": "Nairobi, Kenya",
    "website": "http://rsckenya.org/"
  },
  {
    "name": "Life Skills for Street Children",
    "email": "info@lssckenya.org",
    "phone": "+254 20 888 9012",
    "address": "Nairobi, Kenya",
    "website": "http://www.lssckenya.org/"
  },
  {
    "name": "Kenya Street Children Foundation",
    "email": "info@kscfkenya.org",
    "phone": "+254 20 999 0123",
    "address": "Nairobi, Kenya",
    "website": "http://www.kscfkenya.org/"
  },
  {
    "name": "Street Children Rehabilitation Trust",
    "email": "info@scrtkenya.org",
    "phone": "+254 20 101 2345",
    "address": "Nairobi, Kenya",
    "website": "http://www.scrtkenya.org/"
  },
  {
    "name": "Care for Street Children Kenya",
    "email": "info@cfsckenya.org",
    "phone": "+254 20 202 3456",
    "address": "Nairobi, Kenya",
    "website": "http://www.cfsckenya.org/"
  }

  ]

with app.app_context():
    for ngo in ngo_data:
        if not NGO.query.filter_by(email=ngo["email"]).first():
            new_ngo = NGO(**ngo)
            db.session.add(new_ngo)
    db.session.commit()
    print("NGOs seeded successfully!")
