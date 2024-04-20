// Define an array with walk step items
const steps = [
    { 
        name: "Starting point & Tavern Stop", 
        place: "<p>To start the tour from Tower Bridge, follow the signs for Tower Bridge. The walk to the meeting point of The Dickens Inn is 0.4 miles. <strong>The Dickens Inn, Marble Quay, St Katharine’s Way, London E1W 1UH</strong></p><p>On exiting Tower Bridge tube, walk towards Tower Bridge Approach (which leads onto Tower Bridge). Before you get to the start of the Bridge, enter St Katharine’s Way, which is a road that runs parallel to the bridge road on the left-hand side. The World Trade Centre in London is the building on your left. On your left are some steps which lead down to St Katharine’s Dock and you will see a row of restaurants. Continue walking along past the restaurants until the end of the row.</p>",
        info: "<p>Take a few moments to read the black plaque about the trade at St Katharine’s Docks, on the wall behind you, as you will be asked a question or two about it later on.</p>",
        access: "233",
        audio_direction: "assets/aud/dir/WTT1-1.mp3",
        audio_talk: "assets/aud/his/WappingIntroWithEffects.mp3",
        image: "wap/StKatherinesDocks202208.jpg",
        video: "",
        quiz: "0",
        lat: "51.5065202",
        lon: "-0.0704913",
        questions: {
            q1: "001-What predominant goods were imported into the dock, that it was most famous for, in the 19th Century? The black plaque you will have read on the way to the  Dickens Inn will help you with this answer, and question 2.[Brandy,Tea,Silk,Coffee beans]",
            q2: "002-You may be familiar with the phrase “when the sun is over the yard-arm” which indicates when it is acceptable to have the first alcoholic drink of the day. What part of the Cutty Sark that you saw at the beginning of the tour is the “arm” that this phrase is referring to?[The ship’s wheel,The main mast,The horizontal beams from which the sails hang,The carved figure at the bow of the ship]",
        } 
    },
    { 
        name: "To the Dickens Inn", 
        place: "<p>Turn right before the historic Ivory House and continue walking with the dock to your right past more restaurants, including the Melusine seafood restaurant. Go through an arch in the buildings at the end of the row to the left of the Red Telephone box, and turn left. Another dock will be in front of you. Turn left, past some coffee shops, and head for the Dickens Inn across the ancient footbridges to your left. Enter the Inn, which serves the following ales: London Pride, Truman’s Fire Starter, Greene King IPA, Zephyr, London Glory Ale and Matt Smith IPA. If you are thirsty the Inn offers 2-pint “Steins”. <strong>PLEASE NOTE it is a Cashless Pub.</strong></p>",
        info: "<p>Take special note of the old footbridges near the Inn. Take a few moments to read about the background to St Katharine’s Docks below and have a good look around the Inn. There are a number of small information boards dotted around the ground floor (to the right of the main bar, and on the wooden pillars opposite the bar which may help you answer the following questions. There are also some interesting old photographs of the area by the main entrance. <strong>About the Docks </strong> There have been docks in this important area, the Pool of London, and the City of London, close to the Tower of London, for hundreds of years. When the docks were first redeveloped in the 19th Century they were designed to create as much dockside space as possible. The two linked basins (East and West) are both accessed via an entrance lock from the Thames. Steam engines kept the water level in the basins about four feet above that of the tidal river. The docks were also specially designed so that the warehouses were built right on the quayside so that goods could be unloaded directly into them. This was to try to reduce stealing and pilfering between the ship and warehouse. The docks were opened on 25th October 1828. Although well used, the docks were not a great commercial success and were unable to accommodate large ships. The docks were badly damaged during WWII and all the warehouses around the eastern basin were destroyed, and the site remained derelict until the 1960s. The docks were formally closed in 1968, with redevelopment taking place in the early 1970s. Tower Hotel, which forms one corner of the front dock, was opened in 1973.</p>",
        access: "",
        audio_direction: "/aud/dir/WTT1-2.mp3",
        audio_talk: "",
        image: "wap/DickensInn202208.jpg",
        video: "",
        quiz: "2",
        lat: "51.5065469", 
        lon: "-0.0718432",
        subChild: {
        }  
    },
    { 
        name: "Towards the lock", 
        place: "<p>On departing the Dickens Inn, turn left away from the footbridges.</p><p>Walk towards the lock with the water on your right-hand side, past another red telephone box. At the Lock, turn left and walk a very short distance towards the Thames, find the plaques that are on the brick wall on your left. Study the plaques and the name plaque on the wall and answer the following 3 questions:</p>",
        info: "<p>Did you spot the spelling mistake on the plaque - Katharine’s is mis-spelt. Ooops!</p>",
        access: "",
        audio_direction: "/aud/dir/WTT1-3.mp3",
        audio_talk: "",
        quiz: "121",
        image: "wap/DockEntrance202208.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        subChild: {
        }  
    },
    { 
        name: "Devon House", 
        place: "<p>On your immediate left you will see a tiny alleyway. Turn up the alleyway, which leads to Mews Street. Continue walking down Mews Street with the Docks behind you and past Devon House.</p>",
        info: "",
        access: "",
        audio_direction: "/aud/dir/WTT1-4.mp3",
        audio_talk: "assets/aud/his/WappingIntroWithEffects.mp3",
        quiz: "0",
        image: "wap/harrisons.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        subChild: {
        }  
    },
    { 
        name: "No. 72", 
        place: "<p>At the corner the road veers right into St Katharine’s Way. The building on your right is called President’s Quay. Continue to walk to No. 72 and answer the question:</p>",
        info: "",
        access: "",
        audio_direction: "/aud/dir/WTT1-5.mp3",
        audio_talk: "",
        quiz: "122",
        image: "wap/Docklands 1803.jpeg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        subChild: {
        }  
    },
    { 
        name: "Alderman's Stairs", 
        place: "<p>Continue walking about 20m, and on the right there is a well-hidden turning to Alderman’s Stairs. Taking care, venture down the alleyway to Alderman's Stairs to the river.</p>",
        info: "<p>Enjoy a glimpse of the river - these stairs have been in constant use for many hundreds of years since mediaeval times. They were once a reference point for the ships mooring in the river. If the tide is out, you can access the foreshore but <strong>please take great care</strong>. If wet, the steps can be very slippery.</p>",
        access: "",
        audio_direction: "/aud/dir/WTT1-6.mp3",
        audio_talk: "",
        quiz: "0",
        image: "wap/AldermanStairs202208-2.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        subChild: {
        }  
    },
    { 
        name: "Tower Bridge Wharf", 
        place: "<p>Return to St Katharine’s Way and take the next alley on the right at the sign for the Thames Path. Follow the Thames path down another alley which takes you to Tower Bridge Wharf and its viewing area with benches. Enjoy the views and answer the following questions.<p>",
        info: "",
        access: "",
        audio_direction: "/aud/dir/WTT1-7.mp3",
        audio_talk: "",
        quiz: "123",
        image: "wap/TowerBridgeWharf202208-2.jpg",
        video: "wap/Panning_London_Skyline_3840x2160.mp4",
        lat: "51.50623", 
        lon: "-0.07209",
        subChild: {
        }  
    },
    { 
        name: "Hermitage Riverside Memorial Gardens", 
        place: "<p>Exit the viewing platform at the end farthest from Tower Bridge via an alley which leads you back to St Katharine’s Way. At St Katharine’s Way, continue to follow the Thames Path signs and turn right. After about 20m the road merges into Wapping High Street. After another 20m turn sharp right and enter Hermitage Riverside Memorial Gardens. These gardens were built as a memorial to the East London civilians who lost their lives during the bombing of the area during World War II. Take a few moments to enjoy the gardens and seek out the information plaque then answer the following questions:</p>",
        info: "",
        access: "",
        audio_direction: "/aud/dir/WTT1-8.mp3",
        audio_talk: "",
        quiz: "125",
        image: "wap/HermitageGardens202208-1.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        subChild: {
        }  
    },
    { 
        name: "Wapping High Street", 
        place: "<p>Walk to the end of the gardens but do not exit them. Go up a short slope which takes you over an inlet, and continue walking along the river side with some tall green glass-covered flats and Smiths Fish Restaurant on your left.</p><p>Go down some brick steps (there is a ramp for wheelchairs) and continue along by the river again for another 80m. Continue to the end where the path turns left away from the river into a short alleyway. At the end of this alleyway turn right - where you will find yourself again on Wapping High Street.</p><p>Continue walking along Wapping High Street for 20m</p>",
        info: "<p>On your left and right is Wapping Pier Head, two rows of Georgian houses built for dock officials in the early 19th Century. The garden between the houses marks the original water entrance to London docks, now filled in.</p>",
        access: "",
        audio_direction: "/aud/dir/WTT1-9.mp3",
        audio_talk: "",
        quiz: "126",
        image: "wap/TownOfRamsgatePub202208-1.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        subChild: {
        }  
    },
    { 
        name: "Town of Ramsgate pub", 
        place: "<p>Continue along the road for another 20 meters and you will see the Town of Ramsgate pub.</p>",
        info: "<p>Just before the pub entrance you will see a narrow alleyway. Venture down the alley, which leads to Wapping Old Stairs, a set of Watermen’s Steps. Take care on the stairs as they are very slippery – at high tide you will not be able to go down them.</p><p>Until 1750 the only place to cross the Thames was London Bridge, which was always busy and its gates were locked at curfew time. Therefore, most people used boats across the river and heading east and west. These river steps were the original “bus stops” for the ferries, and were often built close to pubs.</p>",
        access: "",
        audio_direction: "",
        audio_talk: "assets/aud/his/WappingIntroWithEffects.mp3",
        quiz: "128",
        image: "wap/TownOfRamsgateSteps202208.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        subChild: {
        }  
    },
    { 
        name: "Tavern stop No. 2", 
        place: "<p>Return to Wapping High Street, and immediately turn right into the Town of Ramsgate tavern. The Town of Ramsgate, 62 Wapping High Street, London E1W 2PN This pub serves: Young’s London Original, Harvey’s Sussex, Wye Valley HPA real ales, and Whitstable Bay lager. Please note it is a Cashless Bar.Order a drink and then answer the following questions. There is a helpful historical information board near the front door which may help you with the questions.</p>",
        info: "<p>Story of the pub. This is possibly the site of a pub dating back to the 15th Century. Known from 1533 as The Hostel, The Red Cow, then the Ramsgate Old Town and finally as the Town of Ramsgate. The pub is famed for its Christmas decorations.</p>",
        access: "",
        audio_direction: "/aud/dir/WTT1-11.mp3",
        audio_talk: "",
        quiz: "129",
        image: "wap/TownOfRamsgatePub202208-2.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        subChild: {
        }  
    },
    { 
        name: "Green plaque", 
        place: "<p>On exiting the pub, cross the road and enter St John’s Churchyard immediately in front of you. Take the left-hand path inside the churchyard. Follow the path around. On the ivy-covered brick wall at the far end, there is a green plaque. Read the plaque and answer the following questions:</p>",
        info: "",
        access: "<p>Not suitable for wheelchair users as it is very uneven due to tree-roots.</p>",
        audio_direction: "WTT1-12.mp3",
        audio_talk: "",
        quiz: "131",
        image: "wap/TownOfRamsgateGates202208.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        subChild: {
        }  
    },
    { 
        name: "St John’s Church", 
        place: "Continue along the footpath as it turns to the right and exit the churchyard through the wrought iron arch. Immediately in front of you is the converted remains of St John’s Church. To the right of the church is another old building with some figures. Walk to it and answer the questions.",
        info: "",
        access: "",
        audio_direction: "/aud/dir/WTT1-13.mp3",
        audio_talk: "",
        quiz: "132",
        image: "wap/no-image.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        subChild: {
        }  
    },
    { 
        name: "Turk’s Head", 
        place: "<p>Walk left and head back up Scandrett Street to the junction. At the junction you will find the Turk’s Head at No. 1 Green Bank. It is now a French restaurant, but it has an interesting past. Read the plaques on the wall (Tench Street side), including one that is high up in the brickwork</p>",
        info: "",
        access: "",
        audio_direction: "/aud/dir/WTT1-14.mp3",
        audio_talk: "",
        quiz: "133",
        image: "wap/TheTurksHead202208.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        subChild: {
        }  
    },
    { 
        name: "Tavern stop No. 3", 
        place: "<p>Turn down Green Bank. Behind the Turks’s Head is a green space called Wapping Gardens. After 30m, turn left and enter the gardens.<p>Follow the path - you are aiming to exit the gardens at the top. Exit onto Tench Street and turn right. You will see Turner’s Old Star pub about 30m ahead of you.</p><p>The Turner’s Old Star14, Watts Street, London E1W 2QG. Tel 0203726 5371</p><p>Serving Fuller’s London Pride, Sharp’s Doom Bar, Bankside Blonde, Spitfire, Golden Champion, IPA. Card payment £5 minimum</p>",
        info: "<p>This pub dates back to the 1830s and is one of the last few remaining traditional East End pubs in Wapping. There is a garden at the rear of the pub. The Old Star is a Sports bar. We suggest that you check the opening hours of the pub as it does not always open at lunchtimes.</p>",
        access: "<p>We suggest that you check the opening hours of the pub as it does not always open at lunchtimes.</p>",
        audio_direction: "/aud/dir/WTT1-15.mp3",
        audio_talk: "assets/aud/his/TurnersOldStarVOX_02.mp3",
        quiz: "134",
        image: "wap/turners-old-star-london.jpg",
        video: "wap/SEP_OldStar2.mp4",
        lat: "51.50623", 
        lon: "-0.07209",
        subChild: {
        }  
    },
    { 
        name: "Brewhouse Street", 
        place: "<p>Exit the pub onto Watts Street. Turn left and continue along Watts Street with the green space of Wapping Green to your left.</p><p>At the end of Watts Street, you will meet Wapping Lane. Turn right onto Wapping Lane with the Tower Pharmacy on the corner and continue down Wapping Lane.</p><p>After 80m you will see The Dockers Pub on the opposite side of the road. At the junction with Brewhouse Street pause and look at the name of the road on the opposite side of the road.</p>",
        info: "",
        access: "",
        audio_direction: "/aud/dir/WTT1-16.mp3",
        audio_talk: "",
        quiz: "135",
        image: "wap/no-image.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        subChild: {
        }  
    },
    { 
        name: "Wapping Lane", 
        place: "<p>Walk to the end of Wapping Lane. Cross the road carefully and turn left. You will very quickly see Wapping mainline station.</p><p>Continue along the street, and just past Urban Baristas coffee shop, you will see a wrought iron gate which leads to a short passageway to the riverside.</p>",
        info: "<p><strong>The gate looks locked but you can push it open.</strong></p>",
        access: "",
        audio_direction: "/aud/dir/WTT1-17.mp3",
        audio_talk: "",
        quiz: "0",
        image: "wap/no-image.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        subChild: {
        }  
    },
    { 
        name: "Execution Dock", 
        place: "<p>Walk down the alleyway which takes you back to the riverside and St Hilda’s Wharf. You can walk about 200m along by the river.</p><p>Enjoy the views. To the right of the wharf is supposed to be the place of Execution Dock, although it is marked at The Prospect of Whitby pub where the tour ends.</p>",
        info: "<p>When someone was charged with piracy by the Admiralty courts, those who were found guilty and sentenced to death would then be paraded from the prison in Southwark over London Bridge, past the Tower of London and towards Wapping where Execution Dock is - so in fact today, you have been on a very similar journey. According to reports of the time, the streets were often lined with spectators and the river was packed with boats, all keen to see the execution take place.</p>",
        access: "",
        audio_direction: "/aud/dir/WTT1-18.mp3",
        audio_talk: "",
        quiz: "138",
        image: "wap/no-image.jpg",
        video: "wap/BTM wapping RAW .mp4",
        lat: "51.50623", 
        lon: "-0.07209",
        subChild: {
        }  
    },
    { 
        name: "The Prospect of Whitby", 
        place: "<p>Continue along the wharf until there is a sharp turn to the left which takes you back down an alleyway and back onto Wapping High Street. Turn right and continue towards New Crane’s Wharf.</p><p>The road veers round to the right where it turns into Garnet Street. Opposite St Peter’s London Docks C of E primary school there is a sharp right turn which takes you into Wapping Wall.</p><p>Sadly, it is not possible to access the river side here so continue to walk along the wall for around 300m until you reach “The Prospect of Whitby” tavern on the right hand side of the road.</p>",
        info: "",
        access: "",
        audio_direction: "/aud/dir/WTT1-19.mp3",
        audio_talk: "",
        quiz: "0",
        image: "wap/no-image.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        subChild: {
        }  
    },
    { 
        name: "Tavern stop 4", 
        place: "<p>Tavern stop No. 4, The Prospect of Whitby, 57, Wapping Wall, Pelican Wharf, E1W 3SH</p><p>It is a Greene King pub and serves Greene King IPA, Old Speckled Hen, Abbot Ale, and Belhaven ales.</p><p>Order a drink at the bar and answer the following questions.</p>",
        info: "<p>Background on the Inn. It lays claim to being the oldest riverside tavern, dating from around 1520.</p>",
        access: "",
        audio_direction: "/aud/dir/WTT1-20.mp3",
        audio_talk: "assets/aud/his/TheProspectOfWhitbyMG.mp3",
        quiz: "139",
        image: "wap/Wapping6.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        subChild: {
        }  
    },
    { 
        name: "WELL DONE!", 
        place: "<p><strong>You have completed your Wapping Taven Tour.</strong></p><p>When you are ready, exit the pub and turn left onto Wapping Wall.</p><p>Wapping Overground is only a 5-10min walk. The walk back to Tower Hill stations takes around 40min.</p>",
        info: "<p>While we make every effort to ensure our tours are up to date and take into account any changes such as road closures or building works, London is forever changing.</p><p>If you notice anything that impacts your tour please do not hesitate to let us know at: info@beyondthemaplondon.com.</p>",
        access: "",
        audio_direction: "/aud/dir/WTT1-21.mp3",
        audio_talk: "",
        quiz: "0",
        image: "wap/TheProspectOfWhitby202208-2.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        subChild: {
        }  
    },

  ];
  

// 
// <wpt lat="51.5050571" lon="-0.069038">
// <wpt lat="51.5047401" lon="-0.0691934">
// <wpt lat="51.5045574" lon="-0.0683991">
// <wpt lat="51.5051324" lon="-0.0682524">
// <wpt lat="51.5046238" lon="-0.0672287">
// <wpt lat="51.5045324" lon="-0.0677035">
// <wpt lat="51.5037317" lon="-0.0650531">
// <wpt lat="51.5033233" lon="-0.0634387">
// <wpt lat="51.5037317" lon="-0.0633265">
// <wpt lat="51.5035383" lon="-0.0621178">
// <wpt lat="51.5031406" lon="-0.0622214">
// <wpt lat="51.5039305" lon="-0.061902">
// <wpt lat="51.5038871" lon="-0.0614202">
// <wpt lat="51.5041428" lon="-0.0614201">
// <wpt lat="51.5041294" lon="-0.0606423">
// <wpt lat="51.5052514" lon="-0.0606262">
// <wpt lat="51.5053199" lon="-0.0592467">
// <wpt lat="51.5055403" lon="-0.0582033">
// <wpt lat="51.5046647" lon="-0.0573062">
// <wpt lat="51.5041862" lon="-0.0563912">
// <wpt lat="51.5043999" lon="-0.0562222">
// <wpt lat="51.5041545" lon="-0.0558172">
// <wpt lat="51.5054156" lon="-0.0538533">
// <wpt lat="51.5056809" lon="-0.0543021">
// <wpt lat="51.5060872" lon="-0.0543882">
// <wpt lat="51.5062621" lon="-0.0535722">
// <wpt lat="51.5070158" lon="-0.0520442">
// <wpt lat="51.5071964" lon="-0.0512781">


