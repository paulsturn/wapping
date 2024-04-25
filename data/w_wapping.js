// Define an array with walk step items
const steps = [
    { 
        name: "Before you start your Tour", 
        place: "<p>Before you start our tour... Advice and notes -  not too long !. Perhaps a Matthew intro below, again less than 20 seconds!</p>",
        info: "<p>Additional information about the location will appear in a box like this.</p>",
        access: "<p>Messages about Restricted access or Safety considerations will show in box like this.</p>",
        audio_direction: "",
        audio_talk: "",
        image: "wap/pirate-ai.jpg",
        video: "",
        quiz: "0",
        lat: "51.5065202",
        lon: "-0.0704913",
        questions: {
        } 
    },
    { 
        name: "Starting point & Tavern Stop", 
        place: "<p>To start the tour from Tower Bridge, follow the signs for Tower Bridge. The walk to the meeting point of The Dickens Inn is 0.4 miles. <strong>The Dickens Inn, Marble Quay, St Katharine’s Way, London E1W 1UH</strong></p><p>On exiting Tower Bridge tube, walk towards Tower Bridge Approach (which leads onto Tower Bridge). Before you get to the start of the Bridge, enter St Katharine’s Way, which is a road that runs parallel to the bridge road on the left-hand side. The World Trade Centre in London is the building on your left.</p><p>On your left are some steps which lead down to St Katharine’s Dock and you will see a row of restaurants. Continue walking along past the restaurants until the end of the row.</p>",
        info: "<p>Take a few moments to read the black plaque about the trade at St Katharine’s Docks, on the wall behind you, as you will be asked a question or two about it later on.</p>",
        access: "",
        audio_direction: "assets/aud/dir/WTT1-1.mp3",
        audio_talk: "assets/aud/his/WappingIntroWithEffects.mp3",
        image: "wap/StKatherinesDocks202208.jpg",
        video: "",
        quiz: "233",
        lat: "51.5065202",
        lon: "-0.0704913",
        questions: {
        } 
    },
    { 
        name: "To the Dickens Inn", 
        place: "<p>Turn right before the historic Ivory House and continue walking with the dock to your right past more restaurants, including the Melusine seafood restaurant.</p><p>Go through an arch in the buildings at the end of the row to the left of the Red Telephone box, and turn left. Another dock will be in front of you. Turn left, past some coffee shops, and head for the Dickens Inn across the ancient footbridges to your left.</p><p>Enter the Inn, which serves the following ales: London Pride, Truman’s Fire Starter, Greene King IPA, Zephyr, London Glory Ale and Matt Smith IPA. If you are thirsty the Inn offers 2-pint “Steins”. <strong>PLEASE NOTE it is a Cashless Pub.</strong></p>",
        info: "<p>Take special note of the old footbridges near the Inn. Take a few moments to read about the background to St Katharine’s Docks below and have a good look around the Inn. There are a number of small information boards dotted around the ground floor (to the right of the main bar, and on the wooden pillars opposite the bar which may help you answer the following questions. There are also some interesting old photographs of the area by the main entrance.</p><h4>About the Docks </h4><p>There have been docks in this important area, the Pool of London, and the City of London, close to the Tower of London, for hundreds of years. When the docks were first redeveloped in the 19th Century they were designed to create as much dockside space as possible.</p><p>The two linked basins (East and West) are both accessed via an entrance lock from the Thames. Steam engines kept the water level in the basins about four feet above that of the tidal river. The docks were also specially designed so that the warehouses were built right on the quayside so that goods could be unloaded directly into them. This was to try to reduce stealing and pilfering between the ship and warehouse.</p><p>The docks were opened on 25th October 1828. Although well used, the docks were not a great commercial success and were unable to accommodate large ships. The docks were badly damaged during WWII and all the warehouses around the eastern basin were destroyed, and the site remained derelict until the 1960s. The docks were formally closed in 1968, with redevelopment taking place in the early 1970s. Tower Hotel, which forms one corner of the front dock, was opened in 1973.</p>",
        access: "",
        audio_direction: "assets/aud/dir/WTT1-2.mp3",
        audio_talk: "",
        image: "wap/DickensInn202208.jpg",
        video: "",
        quiz: "2",
        lat: "51.5065469", 
        lon: "-0.0718432",
        questions: {
            q1: "101-What predominant goods were imported into the dock, that it was most famous for, in the 19th Century? The black plaque you will have read on the way to the  Dickens Inn will help you with this answer[Brandy,Tea*,Silk,Coffee beans]",
            q2: "102-What was the most famous clipper that regularly called at the Docks and now resides at Greenwich?[The Cutty Sark*,The Soverign of the seas,The Flying Cloud,Morning Cloud]",
            q3: "103-Which famous architect designed the plans for the new dock in the early part of the 19th Century. He also designed one of the original footbridges that you are standing near.[Isambard Kingdom Brunel,Thomas Telford*,Norman Foster,George Stephenson]",
            q4: "104-What is unusual about the Dickens Inn?.[It's an original warehouse from the dock that was reconstructed here*,It's only 10 years old, It was once nearly sold to be shipped to the US,Charles Dickens' mistress lived here]",
            q5: "105-What is the link to Charles Dickens?[It was Charles Dickens' favourite watering hole,The first landlord was 'Samuel Crooge',It featured in a number of Charles Dickens' books,There is no link to Charles Dickens*]",
        } 
    },
    { 
        name: "Towards the lock", 
        place: "<p>On departing the Dickens Inn, turn left away from the footbridges.</p><p>Walk towards the lock with the water on your right-hand side, past another red telephone box. At the Lock, turn left and walk a very short distance towards the Thames, find the plaques that are on the brick wall on your left. Study the plaques and the name plaque on the wall and answer the following 3 questions:</p>",
        info: "<p>Did you spot the spelling mistake on the plaque - Katharine’s is mis-spelt. Ooops!</p>",
        access: "",
        audio_direction: "assets/aud/dir/WTT1-3.mp3",
        audio_talk: "",
        quiz: "121",
        image: "wap/DockEntrance202208.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        questions: {
            q1: "106-Which port official lives in the imposing house behind the wall? [The Dockmaster*,The Commodore of the Pool of London,Admiral of the Fleet, The King]",
            q2: "107-Which Queen of the Netherlands visited the docks in 1988 to commemorate 300 years of Anglo- Dutch maritime friendship?[Maxima,Juliana,Wilhelmina,Beatrix*]",
            q3: "108-The blue-edged plaque describes how the lock works to enable boats to leave the Thames and enter the docks. How much does the high and low tides on the Thames vary by?[Less than 5 meters,5-10 meters,9-10 meters*,10-12 meters]",
        }  
    },
    { 
        name: "Devon House", 
        place: "<p>On your immediate left you will see a tiny alleyway. Turn up the alleyway, which leads to Mews Street. Continue walking down Mews Street with the Docks behind you and past Devon House.</p>",
        info: "",
        access: "",
        audio_direction: "assets/aud/dir/WTT1-4.mp3",
        audio_talk: "assets/aud/his/WappingIntroWithEffects.mp3",
        quiz: "0",
        image: "wap/Harrisons.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        questions: {
        }  
    },
    { 
        name: "No. 72", 
        place: "<p>At the corner the road veers right into St Katharine’s Way. The building on your right is called President’s Quay. Continue to walk to No. 72 and answer the question:</p>",
        info: "",
        access: "",
        audio_direction: "assets/aud/dir/WTT1-5.mp3",
        audio_talk: "",
        quiz: "122",
        image: "wap/Docklands 1803.jpeg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        questions: {
            q1: "110-This is the home to HMS President, which is the Royal Naval Reserve London. When was the Foundation Stone for the building laid?[31st July 1987,30th July 1986*,1st August 1989,1st August 1990]",
        }  
    },
    { 
        name: "Alderman's Stairs", 
        place: "<p>Continue walking about 20m, and on the right there is a well-hidden turning to Alderman’s Stairs. Taking care, venture down the alleyway to Alderman's Stairs to the river.</p>",
        info: "<p>Enjoy a glimpse of the river - these stairs have been in constant use for many hundreds of years since mediaeval times. They were once a reference point for the ships mooring in the river. If the tide is out, you can access the foreshore but <strong>please take great care</strong>. If wet, the steps can be very slippery.</p>",
        access: "",
        audio_direction: "assets/aud/dir/WTT1-6.mp3",
        audio_talk: "",
        quiz: "0",
        image: "wap/AldermanStairs202208-2.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        questions: {
        }  
    },
    { 
        name: "Tower Bridge Wharf", 
        place: "<p>Return to St Katharine’s Way and take the next alley on the right at the sign for the Thames Path. Follow the Thames path down another alley which takes you to Tower Bridge Wharf and its viewing area with benches. Enjoy the views and answer the following questions.<p>",
        info: "",
        access: "",
        audio_direction: "assets/aud/dir/WTT1-7.mp3",
        audio_talk: "",
        quiz: "123",
        image: "wap/TowerBridgeWharf202208-2.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        questions: {
            q1: "115-Name the River?[Tyburn,Effra,Neckinger*,Tide]",        
            q2: "116-On the opposite side of the river is the Shard, which is the tallest building in Britain. How many storeys does it have?[79,88,95*,99]",        
            q3: "117-What is the name of the huge building on the riverbank that you can see across the river?[Canada Wharf,Butler's Wharf*,India Wharf,Angel Wharf]",        
        }  
    },
    { 
        name: "Hermitage Riverside Memorial Gardens", 
        place: "<p>Exit the viewing platform at the end farthest from Tower Bridge via an alley which leads you back to St Katharine’s Way. At St Katharine’s Way, continue to follow the Thames Path signs and turn right. After about 20m the road merges into Wapping High Street. After another 20m turn sharp right and enter Hermitage Riverside Memorial Gardens. These gardens were built as a memorial to the East London civilians who lost their lives during the bombing of the area during World War II. Take a few moments to enjoy the gardens and seek out the information plaque then answer the following questions:</p>",
        info: "",
        access: "",
        audio_direction: "assets/aud/dir/WTT1-8.mp3",
        audio_talk: "",
        quiz: "125",
        image: "wap/HermitageGardens202208-1.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        questions: {
            q1: "120-What was the bombing of London called in WWII?[The London Bombing,The Blitz*,The London Firestorm,The Lightning War]",
            q2: "121-What does the dove symbolise according to the information plaque?[Hope*,Courage,Love,Peace]",  
            q3: "122-On this site stood the Hermitage Wharf which was hit by a massive firebomb raid on the City of London. When was this?[25th December 1940,25th December 1940,29th December 1940*,31st December 1940]",  
            q4: "123-Which former MP lived near the gardens and has a rose bed near the statue named after them in the gardens?[Jim Fitzpatrick,Apsana Begum,George Galloway, Jo Cox*]", 
        }   
    },
    { 
        name: "Wapping High Street", 
        place: "<p>Walk to the end of the gardens but do not exit them. Go up a short slope which takes you over an inlet, and continue walking along the river side with some tall green glass-covered flats and Smiths Fish Restaurant on your left.</p><p>Go down some brick steps (there is a ramp for wheelchairs) and continue along by the river again for another 80m. Continue to the end where the path turns left away from the river into a short alleyway. At the end of this alleyway turn right - where you will find yourself again on Wapping High Street.</p><p>Continue walking along Wapping High Street for 20m</p>",
        info: "<p>On your left and right is Wapping Pier Head, two rows of Georgian houses built for dock officials in the early 19th Century. The garden between the houses marks the original water entrance to London docks, now filled in.</p>",
        access: "",
        audio_direction: "assets/aud/dir/WTT1-9.mp3",
        audio_talk: "",
        quiz: "126",
        image: "wap/TownOfRamsgatePub202208-1.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        questions: {
            q1: "125-On the right is No.3. In the past what was No.3 used for?[A doctor's surgery,A pharmacy,A post office,Customs office*]",  
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
        questions: {
            q1: "130-The location of the stairs had to be memorised by the apprentice watermen. London Black Cab drivers have to pass a similar test. What is it called[The Knowledge*,The Housego,The Cabbie Exam,The London A-Z Test]",      
            q1: "131-At low tide you might be able to see a post near the steps. What was this post used for?[To enable the watermen to tie up their boats so passengers could disembark,To tie condemed pirates to so they would drown when the tide rose*,For River Police to moor their boats to,To enable easy access to the native oyster beds in the Thames ]",       
            q1: "132-Which famous seafarer came to inspect his vessel before sailing to warmer climes in the late 18th century from Waterman Steps?[Lieutenant James Bligh inspecting the Bounty*,James Kirk inspecting the Golden Hind,Lieutenant James Cook inspecting the Endeavour,Captain Horatio Nelson inspecting the Albemarle]", 
        }          
    },
    { 
        name: "Tavern stop No. 2", 
        place: "<p>Return to Wapping High Street, and immediately turn right into the Town of Ramsgate tavern. The Town of Ramsgate, 62 Wapping High Street, London E1W 2PN This pub serves: Young’s London Original, Harvey’s Sussex, Wye Valley HPA real ales, and Whitstable Bay lager. Please note it is a Cashless Bar.Order a drink and then answer the following questions. There is a helpful historical information board near the front door which may help you with the questions.</p>",
        info: "<p>Story of the pub. This is possibly the site of a pub dating back to the 15th Century. Known from 1533 as The Hostel, The Red Cow, then the Ramsgate Old Town and finally as the Town of Ramsgate. The pub is famed for its Christmas decorations.</p>",
        access: "",
        audio_direction: "assets/aud/dir/WTT1-11.mp3",
        audio_talk: "",
        quiz: "129",
        image: "wap/TownOfRamsgatePub202208-2.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        questions: {
            q1: "135-Which notorious Lord Chief Justice was captured whilst trying to escape by boat from here?[Judge Rinder,Judge Frollo,Judge Jeffries*,Judge Reinhold]", 
            q2: "136-What was he disguised as when captured?[A woman,A sailor*,A ferryboatman,A merchant]", 
            q3: "137-Why did the pub's name end up as it is today??[Because a famous mayor of Ramsgate was born in Wapping,Because sheep were herded along this street on their way to nearby Smithfield meat market,Because fishing boats from Ramsgate used to unload their loads nearby*,From the many Ram Skulls found on the shore during Roman times.]",        
        }  
    },
    { 
        name: "Green plaque", 
        place: "<p>On exiting the pub, cross the road and enter St John’s Churchyard immediately in front of you. Take the left-hand path inside the churchyard. Follow the path around. On the ivy-covered brick wall at the far end, there is a green plaque. Read the plaque and answer the following questions:</p>",
        info: "",
        access: "<p>Not suitable for wheelchair users as it is very uneven due to tree-roots.</p>",
        audio_direction: "assets/aud/dir/WTT1-12.mp3",
        audio_talk: "",
        quiz: "131",
        image: "wap/TownOfRamsgateGates202208.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        questions: {
            q1: "140-Who was buried in this churchyard on 1648?[Thomas Cromwell,Thomas à Becket,Thomas Gainsborough,Thomas Rainsborough*]",
            q2: "141-What rank did this person hold in the New Model Army?[General,Colonel*,Admmiarl,Cavalier]",  
            q3: "142-Which famous British politician helped unveil the plaque in 2013?[Tony Blair,Tony Benn*,Hilary Benn,Ben Wallace]",   
        }  
    },
    { 
        name: "St John’s Church", 
        place: "Continue along the footpath as it turns to the right and exit the churchyard through the wrought iron arch. Immediately in front of you is the converted remains of St John’s Church. To the right of the church is another old building with some figures. Walk to it and answer the questions.",
        info: "",
        access: "",
        audio_direction: "assets/aud/dir/WTT1-13.mp3",
        audio_talk: "",
        quiz: "132",
        image: "wap/Figures202208.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        questions: {
            q1: "145-What are the figure on the building?[A girl and a boy*,A nun and a priest,A teacher and a sailor,A shepherdess and shepherd]", 
            q2: "146-When was the building founded?[1666,1695*,1760,1766]",
            q3: "147-How many pupils does the building say it would accommodate?[80,60,110*,150]",     
        } 
    },
    { 
        name: "Turk’s Head", 
        place: "<p>Walk left and head back up Scandrett Street to the junction. At the junction you will find the Turk’s Head at No. 1 Green Bank. It is now a French restaurant, but it has an interesting past. Read the plaques on the wall (Tench Street side), including one that is high up in the brickwork</p>",
        info: "",
        access: "",
        audio_direction: "assets/aud/dir/WTT1-14.mp3",
        audio_talk: "",
        quiz: "133",
        image: "wap/TheTurksHead202208.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        questions: {
            q1: "150-What was the name of the eccentric landlady who ran the pub in the Second World War?[Margaret Elliot,Margaret Murphy,Mog Murphy*,Mary Murphy]",   
            q2: "151-What unusual task did she perform to servicemen and women during WWII?[Provided free food and drink to tem,Washed and pressed thir uniforms,Rifle training,Kept open all hours so that they could receive news of their loved ones*]", 
            q3: "152-What was the name of the Street erected here in 1700?[Swallow Street,Bird Street*,Hand Street,Barley Street]", 
            q4: "153-Who were the Wild Women of Wapping?[Infamous (and uncaught) female pirates,Female print workers ,Pioneering suffragists,Building conservationist group*]",      
        }   
    },
    { 
        name: "Tavern stop No. 3", 
        place: "<p>Turn down Green Bank. Behind the Turks’s Head is a green space called Wapping Gardens. After 30m, turn left and enter the gardens.<p>Follow the path - you are aiming to exit the gardens at the top. Exit onto Tench Street and turn right. You will see Turner’s Old Star pub about 30m ahead of you.</p><p>The Turner’s Old Star14, Watts Street, London E1W 2QG. Tel 0203726 5371</p><p>Serving Fuller’s London Pride, Sharp’s Doom Bar, Bankside Blonde, Spitfire, Golden Champion, IPA. Card payment £5 minimum</p>",
        info: "<p>This pub dates back to the 1830s and is one of the last few remaining traditional East End pubs in Wapping. There is a garden at the rear of the pub. The Old Star is a Sports bar. We suggest that you check the opening hours of the pub as it does not always open at lunchtimes.</p>",
        access: "<p>We suggest that you check the opening hours of the pub as it does not always open at lunchtimes.</p>",
        audio_direction: "assets/aud/dir/WTT1-15.mp3",
        audio_talk: "assets/aud/his/TurnersOldStarVOX_02.mp3",
        quiz: "134",
        image: "wap/turners-old-star-london.jpg",
        video: "wap/SEP_OldStar2.mp4",
        lat: "51.50623", 
        lon: "-0.07209",
        questions: {
            q1: "155-Who owned the pub and named it the “Old Star”??[Josehp Turner*,Joseph Swan,Tina Turner,Sophie Turner]", 
            q2: "156-Who was the 1st landlady in the 1830s?[Sophie Booth*,Sophie Turner,Connie Booth,Sophie Kidd]",  
            q3: "157-Why was the person described as “Puggy”?[They were less than 5 feet tall*,They liked bare knuckle fighting,They had lots of small dogs,They made marbles by hand]",  
            q4: "158-What did this person do at the weekends?[They participated in drunken debauchery in the dockside taverns*,They rowed on the Thames,They trained as a solicitor,They were one of the choristers at St Paul’s cathedral]",  
            q5: "159-What was the name of the witch who was found guilty of witch-practice on this spot in 1658?[Lydia Besom,Lydia Rogers*,Lydia Roberts,Lydia Wickham]",         
        }   
    },
    { 
        name: "Brewhouse Street", 
        place: "<p>Exit the pub onto Watts Street. Turn left and continue along Watts Street with the green space of Wapping Green to your left.</p><p>At the end of Watts Street, you will meet Wapping Lane. Turn right onto Wapping Lane with the Tower Pharmacy on the corner and continue down Wapping Lane.</p><p>After 80m you will see The Dockers Pub on the opposite side of the road. At the junction with Brewhouse Street pause and look at the name of the road on the opposite side of the road.</p>",
        info: "",
        access: "",
        audio_direction: "assets/aud/dir/WTT1-16.mp3",
        audio_talk: "",
        quiz: "135",
        image: "wap/no-image.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        questions: {
            q1: "160-What is the space named in the name of the road, which reflects a warehouse which housed a spice in by-gone times?[Turmeric,Nutmeg,Allspice,Cinnamon*]",    
            q2: "161-This street was also the site of the Pear Tree Inn in the past. What happened there in December 1811 that brought notoriety to the area?[It was the site of a horrific fire in a high-rise dwelling,There were a number of gruesome murders*,The ale sold was found to be diluted with water frm the Thames,Cholera broke out at a communal pump]", 
            q3: "162-Look down the end of the street towards the river and you will see a huge building at the end of Wapping High Street. What is the name on the building?[Battery Wharf,Gun Wharves*,Cannon Wharf,Cotton Wharves]",     
        }  
    },
    { 
        name: "Wapping Lane", 
        place: "<p>Walk to the end of Wapping Lane. Cross the road carefully and turn left. You will very quickly see Wapping mainline station.</p><p>Continue along the street, and just past Urban Baristas coffee shop, you will see a wrought iron gate which leads to a short passageway to the riverside.</p>",
        info: "<p><strong>The gate looks locked but you can push it open.</strong></p>",
        access: "",
        audio_direction: "assets/aud/dir/WTT1-17.mp3",
        audio_talk: "",
        quiz: "0",
        image: "wap/no-image.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        questions: {      
        }  
    },
    { 
        name: "Execution Dock", 
        place: "<p>Walk down the alleyway which takes you back to the riverside and St Hilda’s Wharf. You can walk about 200m along by the river.</p><p>Enjoy the views. To the right of the wharf is supposed to be the place of Execution Dock, although it is marked at The Prospect of Whitby pub where the tour ends.</p>",
        info: "<p>When someone was charged with piracy by the Admiralty courts, those who were found guilty and sentenced to death would then be paraded from the prison in Southwark over London Bridge, past the Tower of London and towards Wapping where Execution Dock is - so in fact today, you have been on a very similar journey. According to reports of the time, the streets were often lined with spectators and the river was packed with boats, all keen to see the execution take place.</p>",
        access: "",
        audio_direction: "assets/aud/dir/WTT1-18.mp3",
        audio_talk: "",
        quiz: "138",
        image: "wap/no-image.jpg",
        video: "wap/BTM wapping RAW .mp4",
        lat: "51.50623", 
        lon: "-0.07209",
        questions: {
            q1: "165-One of the most famous death sentences carried out was on Captain Kidd.  He is remembered at another tavern on Wapping High Street. His death was well documented but what was unusual about it?[A failed escape attempts delayed the hanging 3 times,He had to be hanged twice as the rope snapped the first time*,Kidd’s wife turned up and begged for Kidd to be pardoned,The execution was delayed until the tide came back in]",        
            q2: "166-Which famous Hollywood actor played Captain Kidd in the 1945 film?[Stewart Grainger,Vincent Price,Errol Flynn,Charles Laughton*]", 
            q3: "167-In which popular Action-adventure video game includes finding map pieces that Captain Kidd has supposedly given to crew members??[Assassin's Creed III*,Sea of Theives,Fallout,Blackwake I]", 
        }  
    },
    { 
        name: "The Prospect of Whitby", 
        place: "<p>Continue along the wharf until there is a sharp turn to the left which takes you back down an alleyway and back onto Wapping High Street. Turn right and continue towards New Crane’s Wharf.</p><p>The road veers round to the right where it turns into Garnet Street. Opposite St Peter’s London Docks C of E primary school there is a sharp right turn which takes you into Wapping Wall.</p><p>Sadly, it is not possible to access the river side here so continue to walk along the wall for around 300m until you reach “The Prospect of Whitby” tavern on the right hand side of the road.</p>",
        info: "",
        access: "",
        audio_direction: "assets/aud/dir/WTT1-19.mp3",
        audio_talk: "",
        quiz: "0",
        image: "wap/no-image.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        questions: {      
        }  
    },
    { 
        name: "Tavern stop 4", 
        place: "<p>Tavern stop No. 4, The Prospect of Whitby, 57, Wapping Wall, Pelican Wharf, E1W 3SH</p><p>It is a Greene King pub and serves Greene King IPA, Old Speckled Hen, Abbot Ale, and Belhaven ales.</p><p>Order a drink at the bar and answer the following questions.</p>",
        info: "<p>Background on the Inn. It lays claim to being the oldest riverside tavern, dating from around 1520.</p>",
        access: "",
        audio_direction: "assets/aud/dir/WTT1-20.mp3",
        audio_talk: "assets/aud/his/TheProspectOfWhitbyMG.mp3",
        quiz: "139",
        image: "wap/Wapping6.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        questions: {
            q1: "171-What has not been a former name of the Prospect of Whitby?[Devil's Taven,The Pelican,The Zebra,The King's Head*]",       
            q2: "172-What is the oldest part of the pub still intact?[The pewter-topped bar,The staircase to the upper floor,The stone floor*,The Chimney]", 
            q3: "173-The pub was a meeting place for sailors, smugglers, cut-throats and footpads. What is a “footpad”?[A cordwainer,A thief specialising in pedestrian victims*,A highwayman,A pickpocket]", 
            q4: "174-If you look out of the rear of the building at the river you will see a replica gallows and noose. What happened to the bodies of the  pirates that were executed there?[They were cut down immediately and the bodies were thrown  into the river,Their bodies were taken to Guy’s Hospital to be used for dissection practice,The bodies were left until 3 tides had flowed over them*,They were left for the local wildlife to feed upon]", 
            q5: "175-What unusual event happened at the pub in 1953??[It was visited by Royalty,It burnt down,It was raided by armed robbers*,It was visited by Tom Cruise whilst filming Mission Impossible]", 
            q6: "176-How many monarchs has the inn coincided with? There is a helpful plaque on the stairs to help you.[21,22*,23,24]", 
            q7: "177-What popular comedy series had an episode set here?[As Time Goes By,The Young Ones,Birds of a Feather,Only Fools and Horses*]",  
        } 
    },
    { 
        name: "WELL DONE!", 
        place: "<p><strong>You have completed your Wapping Taven Tour.</strong></p><p>When you are ready, exit the pub and turn left onto Wapping Wall.</p><p>Wapping Overground is only a 5-10min walk. The walk back to Tower Hill stations takes around 40min.</p>",
        info: "<p>While we make every effort to ensure our tours are up to date and take into account any changes such as road closures or building works, London is forever changing.</p><p>If you notice anything that impacts your tour please do not hesitate to let us know at: info@beyondthemaplondon.com.</p>",
        access: "",
        audio_direction: "assets/aud/dir/WTT1-21.mp3",
        audio_talk: "",
        quiz: "0",
        image: "wap/TheProspectOfWhitby202208-2.jpg",
        video: "",
        lat: "51.50623", 
        lon: "-0.07209",
        questions: { 
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



