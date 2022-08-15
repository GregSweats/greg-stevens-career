---
page-title: "Understand OData in 6 steps · OData - the Best Way to REST"
url: https://www.odata.org/getting-started/understand-odata-in-6-steps/
date: "2022-06-16 12:09:43"
created: 2022-08-14T18:50:26-06:00
updated: 2022-08-14T18:50:26-06:00
---
OData (Open Data Protocol) is an [OASIS standard](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=odata) that defines the best practice for building and consuming RESTful APIs. OData helps you focus on your business logic while building RESTful APIs without having to worry about the approaches to define request and response headers, status codes, HTTP methods, URL conventions, media types, payload formats and query options etc. OData also guides you about tracking changes, defining functions/actions for reusable procedures and sending asynchronous/batch requests etc. Additionally, OData provides facility for extension to fulfil any custom needs of your RESTful APIs.

OData RESTful APIs are easy to consume. The OData metadata, a machine-readable description of the data model of the APIs, enables the creation of powerful generic client proxies and tools. Some of them can help you interact with OData even without knowing anything about the protocol. The following 6 steps demonstrate 6 interesting scenarios of OData consumption across different programming platforms. But if you are a non-developer and would like to simply play with OData, [XOData](http://pragmatiqa.com/xodata/) is the best start for you.

### Step 1: Requesting resources

As the REST principles go, "Everything is a Resource". As a simple start, let's see how resources can be retrieved from the OData RESTful APIs. The sample service used is the TripPin service which simulates the service of an open trip management system. Our friend, Russell Whyte, who has formerly registered TripPin, would like to find out who are the other people in it.

-   [HTTP request](https://www.odata.org/getting-started/understand-odata-in-6-steps/#http1)
-   [C#](https://www.odata.org/getting-started/understand-odata-in-6-steps/#csharp1)  
-   [Olingo JavaScript client](https://www.odata.org/getting-started/understand-odata-in-6-steps/#olingo-js-1)
-   [C++](https://www.odata.org/getting-started/understand-odata-in-6-steps/#odatacpp-1)
-   [Node.js](https://www.odata.org/getting-started/understand-odata-in-6-steps/#nodejs-1)
-   [Contribute](https://www.odata.org/getting-started/understand-odata-in-6-steps/#contribute-1)

```
GET https://services.odata.org/v4/TripPinServiceRW/People HTTP/1.1
OData-Version: 4.0
OData-MaxVersion: 4.0
```

```
var context = new DefaultContainer(new Uri("https://services.odata.org/v4/TripPinServiceRW/"));
var people = context.People.Execute();
```

The client library used is the [OData v4 Client Code Generator](https://visualstudiogallery.msdn.microsoft.com/9b786c0e-79d1-4a50-89a5-125e57475937).

**Typed syntax**

```
var client = new ODataClient("https://services.odata.org/v4/TripPinServiceRW/");
var people = await client.For<People>().FindEntriesAsync();
```

**Dynamic syntax**

```
var x = ODataDynamic.Expression;
var client = new ODataClient("https://services.odata.org/v4/TripPinServiceRW/");
var people = await client.For(x.People).FindEntriesAsync();
```

The client library used is the [Simple.OData.Client](https://github.com/object/Simple.OData.Client/wiki). The code is contributed by [Vagif Abilov](https://github.com/object)

```
var serviceRoot = 'https://services.odata.org/V4/TripPinServiceRW/';
var headers = { 'Content-Type': 'application/json', Accept: 'application/json' };
var request = {
    requestUri: serviceRoot + 'People',
    method: 'GET',
    headers: headers,
    data: null
};
odatajs.oData.request(
    request,
    function (data, response) {
        var people = data.value;
    },
    function (err) {
        alert('Fail: ' + err.Message);
    }
);
```

The client library used is the [Olingo OData Client for JavaScript](http://olingo.apache.org/doc/javascript/index.html).

```
auto service_context = std::make_shared<DefaultContainer>(U("https://services.odata.org/V4/(S(34wtn2c0hkuk5ekg0pjr513b))/TripPinServiceRW/"));
auto people = service_context->create_people_query()->execute_query().get();
```

The client library used is the [ODataCpp Client](https://github.com/odata/odatacpp-client). The code is contributed by Bin Xu.

```
var http = require('http');
var serviceRoot = 'https://services.odata.org/v4/TripPinServiceRW/';
getURL(serviceRoot + 'People');
function getURL(url) {
    var body = '';
    http.get(url, function (response) {
        response.on('data', function (chunk) {
            body+=chunk;
        });
        response.on('end', function () {
            console.log(body);
        });
    }).on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });
}
```

Download and install the Node.js platform from [nodejs.org](http://nodejs.org/) then run the snippets below using the node command. The code is contributed by [Mark Peterson](https://github.com/markpete)

![GitHub logo](https://www.odata.org/getting-started/understand-odata-in-6-steps/assets/Octocat.png)

#### Contribute to "Understanding OData in 6 steps"

Want to contribute code snippet for another platform or suggest changes to this content? You can edit and submit changes to "Understanding OData in 6 steps" on its [Github repository](https://github.com/ODataOrg/home-samples).

### Step 2: Requesting an individual resource

REST principles also say, that every resource is identified by a unique identifier. OData also enables defining key properties of a resource and retrieving it using the keys. In this step, Russell wants to find the information about himself by specifying his username as the key.

-   [HTTP request](https://www.odata.org/getting-started/understand-odata-in-6-steps/#http2)
-   [C#](https://www.odata.org/getting-started/understand-odata-in-6-steps/#csharp2)  
-   [Olingo JavaScript client](https://www.odata.org/getting-started/understand-odata-in-6-steps/#olingo-js-2)
-   [C++](https://www.odata.org/getting-started/understand-odata-in-6-steps/#odatacpp-2)
-   [Node.js](https://www.odata.org/getting-started/understand-odata-in-6-steps/#nodejs-2)
-   [Contribute](https://www.odata.org/getting-started/understand-odata-in-6-steps/#contribute-2)

```
GET https://services.odata.org/v4/TripPinServiceRW/People('russellwhyte') HTTP/1.1
OData-Version: 4.0
OData-MaxVersion: 4.0
```

```
var context = new DefaultContainer(new Uri("https://services.odata.org/v4/(S(34wtn2c0hkuk5ekg0pjr513b))/TripPinServiceRW/"));
var person = context.People.ByKey(userName: "russellwhyte").GetValue();
```

The client library used is the [OData v4 Client Code Generator](https://visualstudiogallery.msdn.microsoft.com/9b786c0e-79d1-4a50-89a5-125e57475937).

**Typed syntax**

```
var client = new ODataClient("https://services.odata.org/v4/TripPinServiceRW/");
var person = await client.For<People>().Key("russellwhyte").FindEntryAsync();
```

**Dynamic syntax**

```
var x = ODataDynamic.Expression;
var client = new ODataClient("https://services.odata.org/v4/TripPinServiceRW/");
var person = await client.For(x.People).Key("russellwhyte").FindEntryAsync();
Assert.Equal("russellwhyte", person.UserName);
```

The client library used is the [Simple.OData.Client](https://github.com/object/Simple.OData.Client/wiki). The code is contributed by [Vagif Abilov](https://github.com/object)

```
var serviceRoot = 'https://services.odata.org/V4/TripPinServiceRW/';
var headers = { 'Content-Type': 'application/json', Accept: 'application/json' };
var request = {
    requestUri: serviceRoot + 'People('russellwhyte')',
    method: 'GET',
    headers: headers,
    data: null
};
odatajs.oData.request(
    request,
    function (data, response) {
    var russell = data;
    },
    function (err) {
    alert('Fail: ' + err.Message);
    }
);
```

The client library used is the [Olingo OData Client for JavaScript](http://olingo.apache.org/doc/javascript/index.html).

```
auto service_context = std::make_shared<DefaultContainer>(U("https://services.odata.org/V4/(S(34wtn2c0hkuk5ekg0pjr513b))/TripPinServiceRW/"));
auto people = service_context->create_people_query()->key(U("russellwhyte"))->execute_query().get();
```

The client library used is the [ODataCpp Client](https://github.com/odata/odatacpp-client). The code is contributed by [Bin Xu](https://github.com/bixu-ms)

```
var http = require('http');
var serviceRoot = 'https://services.odata.org/v4/TripPinServiceRW/';
getURL(serviceRoot + 'People('russellwhyte')');
function getURL(url) {
    var body = '';
    http.get(url, function (response) {
        response.on('data', function (chunk) {
            body+=chunk;
        });
        response.on('end', function () {
            console.log(body);
        });
    }).on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });
}
```

Download and install the Node.js platform from [nodejs.org](http://nodejs.org/) then run the snippets below using the node command. The code is contributed by [Mark Peterson](https://github.com/markpete)

![GitHub logo](https://www.odata.org/getting-started/understand-odata-in-6-steps/assets/Octocat.png)

#### Contribute to "Understanding OData in 6 steps"

Want to contribute code snippet for another platform or suggest changes to this content? You can edit and submit changes to "Understanding OData in 6 steps" on its [Github repository](https://github.com/ODataOrg/home-samples).

### Step 3: Queries

As an architecture that's built on top of the current features of the Web, RESTful APIs can also support query strings. For that, OData defines a series of system query options that can help you construct complicated queries for the resources you want. With the help of that, our friend Russell can find out the first 2 persons in the system who have registered at least one trip that costs more than 3000, and only display their first name and last name.

-   [HTTP request](https://www.odata.org/getting-started/understand-odata-in-6-steps/#http3)
-   [C#](https://www.odata.org/getting-started/understand-odata-in-6-steps/#csharp3)  
-   [Olingo JavaScript client](https://www.odata.org/getting-started/understand-odata-in-6-steps/#olingo-js-3)
-   [C++](https://www.odata.org/getting-started/understand-odata-in-6-steps/#odatacpp-3)
-   [Node.js](https://www.odata.org/getting-started/understand-odata-in-6-steps/#nodejs-3)
-   [Contribute](https://www.odata.org/getting-started/understand-odata-in-6-steps/#contribute-3)

```
GET https://services.odata.org/v4/TripPinServiceRW/People?$top=2 &amp; $select=FirstName, LastName &amp; $filter=Trips/any(d:d/Budget gt 3000) HTTP/1.1
OData-Version: 4.0
OData-MaxVersion: 4.0
```

```
var context = new DefaultContainer(new Uri("https://services.odata.org/v4/(S(34wtn2c0hkuk5ekg0pjr513b))/TripPinServiceRW/"));
var people = context.People.Where(c => c.Trips.Any(d => d.Budget > 3000)).Take(2).Select(c => new {c.FirstName, c.LastName});
```

The client library used is the [OData v4 Client Code Generator](https://visualstudiogallery.msdn.microsoft.com/9b786c0e-79d1-4a50-89a5-125e57475937).

**Typed syntax**

```
var client = new ODataClient("https://services.odata.org/v4/TripPinServiceRW/");
var people = await client.For<People>()
    .Filter(x => x.Trips.Any(y=> y.Budget > 3000))
    .Top(2)
    .Select(x => new {x.FirstName, x.LastName})
    .FindEntriesAsync();
```

**Dynamic syntax**

```
var x = ODataDynamic.Expression;
var client = new ODataClient("https://services.odata.org/v4/TripPinServiceRW/");
var people = await client
    .For(x.People)
    .Filter(x.Trips.Any(x.Budget > 3000))
    .Top(2)
    .Select(x.FirstName, x.LastName)
    .FindEntriesAsync() as IEnumerable<dynamic>;
```

The client library used is the [Simple.OData.Client](https://github.com/object/Simple.OData.Client/wiki).The code is contributed by [Vagif Abilov](https://github.com/object)

```
var serviceRoot = 'https://services.odata.org/V4/TripPinServiceRW/';
var headers = { 'Content-Type': 'application/json', Accept: 'application/json' };
var request = {
    requestUri: serviceRoot + 'People?$top=2 & $filter=Trips/any(d:d/Budget gt 3000)',
    method: 'GET',
    headers: headers,
    data: null
};
odatajs.oData.request(
    request,
    function (data, response) {
    var filtedPeople = data.value;
    var FirstName = filtedPeople[0].FirstName;
    },
    function (err) {
        alert('Fail: ' + err.Message);
    }
);
```

The client library used is the [Olingo OData Client for JavaScript](http://olingo.apache.org/doc/javascript/index.html).

```
auto service_context = std::make_shared<DefaultContainer>(U("https://services.odata.org/V4/(S(34wtn2c0hkuk5ekg0pjr513b))/TripPinServiceRW/"));
auto people = service_context->create_people_query()->filter(U("Trips/any(d:d/Budget gt 3000)"))->select(U("FirstName, LastName"))->top(2)->execute_query().get();
```

The client library used is the [ODataCpp Client](https://github.com/odata/odatacpp-client). The code is contributed by [Bin Xu](https://github.com/bixu-ms)

```
var http = require('http');
var serviceRoot = 'https://services.odata.org/v4/TripPinServiceRW/';
getURL(serviceRoot + 'People?$top=2 & $select=FirstName, LastName & $filter=Trips/any(d:d/Budget gt 3000)');
function getURL(url) {
    var body = '';
    http.get(url, function (response) {
        response.on('data', function (chunk) {
            body+=chunk;
        });
        response.on('end', function () {
            console.log(body);
        });
    }).on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });
}
```

Download and install the Node.js platform from [nodejs.org](http://nodejs.org/) then run the snippets below using the node command. The code is contributed by [Mark Peterson](https://github.com/markpete)

![GitHub logo](https://www.odata.org/getting-started/understand-odata-in-6-steps/assets/Octocat.png)

#### Contribute to "Understanding OData in 6 steps"

Want to contribute code snippet for another platform or suggest changes to this content? You can edit and submit changes to "Understanding OData in 6 steps" on its [Github repository](https://github.com/ODataOrg/home-samples).

### Step 4: Creating a new resource

REST principles require the using of simple and uniform interfaces. With that regard, OData clients can expect unified interfaces of the resources. The stateless transfer of representations in REST are carried out by using different HTTP methods in the requests. After having gone through the first 3 steps, Russell thinks the system is useful. He wants to add his best friend Lewis to the system. He finds out that all he needs to do is to send a POST request containing a JSON representation of Lewis' information to the same interface from which he requested the people information.

-   [HTTP request](https://www.odata.org/getting-started/understand-odata-in-6-steps/#http4)
-   [C#](https://www.odata.org/getting-started/understand-odata-in-6-steps/#csharp4)  
-   [Olingo JavaScript client](https://www.odata.org/getting-started/understand-odata-in-6-steps/#olingo-js-4)
-   [C++](https://www.odata.org/getting-started/understand-odata-in-6-steps/#odatacpp-4)
-   [Node.js](https://www.odata.org/getting-started/understand-odata-in-6-steps/#nodejs-4)
-   [Contribute](https://www.odata.org/getting-started/understand-odata-in-6-steps/#contribute-4)

```
POST https://services.odata.org/v4/(S(34wtn2c0hkuk5ekg0pjr513b))/TripPinServiceRW/People HTTP/1.1
OData-Version: 4.0
OData-MaxVersion: 4.0
Content-Length: 428
Content-Type: application/json
{
    'UserName':'lewisblack',
    'FirstName':'Lewis',
    'LastName':'Black',
    'Emails':[
        'lewisblack@example.com'
    ],
    'AddressInfo':[
        {
            Address: '187 Suffolk Ln.',
            City: {
CountryRegion: 'United States',
Name: 'Boise',
Region: 'ID'
            }
        }
    ],
    'Gender': 'Male',
    'Concurrency':635519729375200400
}
```

```
var context = new DefaultContainer(new Uri("https://services.odata.org/v4/(S(34wtn2c0hkuk5ekg0pjr513b))/TripPinServiceRW/"));
var lewis = new Person()
{
    UserName = "lewisblack",
    FirstName = "Lewis",
    LastName = "Black",
    Emails = new ObservableCollection<string>() {"lewisblack@example.com"},
    AddressInfo =
        new ObservableCollection<Location>()
        {
            new Location()
            {
Address = "187 Suffolk Ln.",
City = new City() {CountryRegion = "United States", Name = "Boise", Region = "ID"}
            }
        },
    Gender = PersonGender.Male,
    Concurrency = 635519729375200400
};
context.AddObject("People", lewis);
context.SaveChanges();
```

The client library used is the [OData v4 Client Code Generator](https://visualstudiogallery.msdn.microsoft.com/9b786c0e-79d1-4a50-89a5-125e57475937).

**Typed syntax**

```
var client = new ODataClient("https://services.odata.org/v4/TripPinServiceRW/");
var person = await client
    .For<People>()
    .Set(new People()
    {
        UserName = "lewisblack",
        FirstName = "Lewis",
        LastName = "Black",
        Emails = new [] { "lewisblack@example.com" },
        AddressInfo = new []
        {
            new Location()
            {
Address = "187 Suffolk Ln.",
City = new City
{
CountryRegion = "United States",
Name = "Boise",
Region = "ID"
}
            }
        },
        Gender = PersonGender.Male,
        Concurrency = 635519729375200400
    })
    .InsertEntryAsync();
```

**Dynamic syntax**

```
var x = ODataDynamic.Expression;
var client = new ODataClient("https://services.odata.org/v4/TripPinServiceRW/");
var person = await client
    .For(x.People)
    .Set(new
    {
        UserName = "lewisblack",
        FirstName = "Lewis",
        LastName = "Black",
        Emails = new[] { "lewisblack@example.com" },
        AddressInfo = new[]
        {
            new
            {
Address = "187 Suffolk Ln.",
City = new
{
CountryRegion = "United States",
Name = "Boise",
Region = "ID"
}
            }
        },
        Gender = PersonGender.Male,
        Concurrency = 635519729375200400
    })
    .InsertEntryAsync();
```

The client library used is the [Simple.OData.Client](https://github.com/object/Simple.OData.Client/wiki). The code is contributed by [Vagif Abilov](https://github.com/object)

```
var serviceRoot = 'https://services.odata.org/V4/(S(34wtn2c0hkuk5ekg0pjr513b))/TripPinServiceRW/';
var headers = { 'Content-Type': 'application/json', Accept: 'application/json' };
var newPerson = {
    UserName:'lewisblack',
    FirstName:'Lewis',
    LastName:'Black',
    Emails:[
        'lewisblack@example.com'
    ],
    AddressInfo:[
        {
            Address: '187 Suffolk Ln.',
            City: {
CountryRegion: 'United States',
Name: 'Boise',
Region: 'ID'
            }
        }
    ],
    Gender: 'Male'
};
var request = {
    requestUri: serviceRoot + 'People',
    method: 'POST',
    headers: headers,
    data: newPerson
};
odatajs.oData.request(
    request,
    function (data, response) {
        var createeRes = response;
    },
    function (err) {
        alert('Fail: ' + err.Message);
    }
);
```

The client library used is the [Olingo OData Client for JavaScript](http://olingo.apache.org/doc/javascript/index.html).

```
auto service_context = std::make_shared<DefaultContainer>(U("https://services.odata.org/V4/(S(34wtn2c0hkuk5ekg0pjr513b))/TripPinServiceRW/"));
auto lewis = std::make_shared<Person>(service_context);
lewis->set_username(U("lewisblack"));
lewis->set_firstname(U("Lewis"));
lewis->set_lastname(U("Black"));
lewis->set_emails({ U("lewisblack@example.com") });
auto location = std::make_shared<Location>(service_context);
location->set_address(U("187 Suffolk Ln."));
auto city = std::make_shared<City>(service_context);
city->set_countryregion(U("United States"));
city->set_name(U("Boise"));
city->set_region(U("ID"));
location->set_city(city);
lewis->set_addressinfo({ location });
lewis->set_gender(PersonGender::Male);
lewis->set_concurrency(635519729375200400);
service_context->add_object(U("People"), lewis).get();
```

The client library used is the [ODataCpp Client](https://github.com/odata/odatacpp-client). The code is contributed by [Bin Xu](https://github.com/bixu-ms)

```
var http = require('http');
var serviceHost = 'services.odata.org';
var servicePath = '/v4/TripPinServiceRW/';
var newPerson = {
    UserName:'lewisblack',
    FirstName:'Lewis',
    LastName:'Black',
    Emails:[
        'lewisblack@example.com'
    ],
    AddressInfo:[
        {
            Address: '187 Suffolk Ln.',
            City: {
CountryRegion: 'United States',
Name: 'Boise',
Region: 'ID'
            }
        }
    ],
    Gender: 'Male'
};
var postData = JSON.stringify(newPerson);
var options = {
    hostname: serviceHost,
    path: servicePath + 'People',
    port: 80,
    method: 'POST',
    headers: {
        'OData-Version': '4.0',
        'OData-MaxVersion': '4.0',
        'Content-Type': 'application/json',
        'Content-Length': postData.length
    }
};
var req = http.request(options, function(res) {
    var body = '';
    res.on('data', function (chunk) {
        body += chunk;
    });
    res.on('end', function () {
        console.log(body);
    });
});
req.on('error', function(e) {
    console.log('ERROR: ' + e.message);
});
req.write(postData);
req.end();
```

Download and install the Node.js platform from [nodejs.org](http://nodejs.org/) then run the snippets below using the node command. The code is contributed by [Mark Peterson](https://github.com/markpete)

![GitHub logo](https://www.odata.org/getting-started/understand-odata-in-6-steps/assets/Octocat.png)

#### Contribute to "Understanding OData in 6 steps"

Want to contribute code snippet for another platform or suggest changes to this content? You can edit and submit changes to "Understanding OData in 6 steps" on its [Github repository](https://github.com/ODataOrg/home-samples).

### Step 5: Relating resources

In RESTful APIs, resources are usually dependent with each other. For that, the concept of relationships in OData can be defined among resources to add flexibility and richness to the data model. For example, in the TripPin OData service, people are related to the trips that they've booked using the system. Knowing that, Russell would like to invite Lewis to his existing trip in the U.S. by relating that trip to Lewis.

-   [HTTP request](https://www.odata.org/getting-started/understand-odata-in-6-steps/#http5)
-   [C#](https://www.odata.org/getting-started/understand-odata-in-6-steps/#csharp5)  
-   [Olingo JavaScript client](https://www.odata.org/getting-started/understand-odata-in-6-steps/#olingo-js-5)
-   [C++](https://www.odata.org/getting-started/understand-odata-in-6-steps/#odatacpp-5)
-   [Node.js](https://www.odata.org/getting-started/understand-odata-in-6-steps/#nodejs-5)
-   [Contribute](https://www.odata.org/getting-started/understand-odata-in-6-steps/#contribute-5)

```
POST https://services.odata.org/v4/(S(34wtn2c0hkuk5ekg0pjr513b))/TripPinServiceRW/People('lewisblack')/Trips/$ref HTTP/1.1
OData-Version: 4.0
OData-MaxVersion: 4.0
Content-Length: 123
Content-Type: application/json
{
    '@odata.id':'https://services.odata.org/V4/(S(34wtn2c0hkuk5ekg0pjr513b))/TripPinServiceRW/People('russellwhyte')/Trips(0)'
}
```

```
var context = new DefaultContainer(new Uri("https://services.odata.org/v4/(S(34wtn2c0hkuk5ekg0pjr513b))/TripPinServiceRW/"));
var trip = context.People.ByKey(userName: "russellwhyte").Trips.ByKey(tripId: 0).GetValue();
var dsc = new DataServiceCollection<Person>(context)
{
    context.People.ByKey(userName: "lewisblack").GetValue()
};
dsc[0].Trips.Add(trip);</p>
<p>context.SaveChanges();
```

The client library used is the [OData v4 Client Code Generator](https://visualstudiogallery.msdn.microsoft.com/9b786c0e-79d1-4a50-89a5-125e57475937).

**Typed syntax**

```
var client = new ODataClient("https://services.odata.org/v4/TripPinServiceRW/");
var trip = await client
    .For<People>()
    .Key("russellwhyte")
    .NavigateTo<Trip>()
    .Key(0)
    .FindEntryAsync();
await client
    .For<People>()
    .Key("scottketchum")
    .LinkEntryAsync(trip);
var person = await client
    .For<People>()
    .Key("scottketchum")
    .Expand(x => x.Trips)
    .FindEntryAsync();
```

**Dynamic syntax**

```
var x = ODataDynamic.Expression;
var client = new ODataClient("https://services.odata.org/v4/TripPinServiceRW/");
var trip = await client
    .For(x.People)
    .Key("russellwhyte")
    .NavigateTo(x.Trips)
    .Key(0)
    .FindEntryAsync();
await client
    .For(x.People)
    .Key("scottketchum")
    .LinkEntryAsync(x.Trips, trip);
var person = await client
    .For(x.People)
    .Key("scottketchum")
    .Expand(x.Trips)
    .FindEntryAsync();
```

The client library used is the [Simple.OData.Client](https://github.com/object/Simple.OData.Client/wiki). The code is contributed by [Vagif Abilov](https://github.com/object)

```
var serviceRoot = 'https://services.odata.org/V4/(S(34wtn2c0hkuk5ekg0pjr513b))/TripPinServiceRW/';
var headers = { 'Content-Type': 'application/json', Accept: 'application/json' };
var relateBody = {
    '@odata.id':'https://services.odata.org/V4/(S(34wtn2c0hkuk5ekg0pjr513b))/TripPinServiceRW/People('russellwhyte')/Trips(0)'
};
var request = {
    requestUri: serviceRoot + 'People('lewisblack')/Trips/$ref',
    method: 'POST',
    headers: headers,
    data: relateBody
};
odatajs.oData.request(
    request,
    function (data, response) {
        var res = response;
    },
    function (err) {
        alert('Fail: ' + err.Message);
    }
);
```

The client library used is the [Olingo OData Client for JavaScript](http://olingo.apache.org/doc/javascript/index.html).

```
auto service_context = std::make_shared<DefaultContainer>(U("https://services.odata.org/V4/(S(34wtn2c0hkuk5ekg0pjr513b))/TripPinServiceRW/"));
auto lewis = service_context->create_people_query()->key(U("lewisblack"))->execute_query().get()[0];
auto russell = service_context->create_people_query()->key(U("russellwhyte"))->expand(U("Trips"))->execute_query().get()[0];
auto trip = russell->get_trips()[0];
service_context->add_reference(lewis, U("Trips"), trip).get();
```

The client library used is the [ODataCpp Client](https://github.com/odata/odatacpp-client). The code is contributed by [Bin Xu](https://github.com/bixu-ms)

```
var http = require('http');
var serviceHost = 'services.odata.org';
var servicePath = '/v4/TripPinServiceRW/';
var postData = JSON.stringify({
    '@odata.id': 'https://services.odata.org/V4/TripPinServiceRW/People('russellwhyte')/Trips(0)'
});
var options = {
    hostname: serviceHost,
    path: servicePath + 'People('lewisblack')/Trips/$ref',
    port: 80,
    method: 'POST',
    headers: {
        'OData-Version': '4.0',
        'OData-MaxVersion': '4.0',
        'Content-Type': 'application/json',
        'Content-Length': postData.length
    }
};
var req = http.request(options, function(res) {
    var body = '';
    res.on('data', function (chunk) {
        body += chunk;
    });
    res.on('end', function () {
        console.log(body);
    });
});
req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});
req.write(postData);
req.end();
```

Download and install the Node.js platform from [nodejs.org](http://nodejs.org/) then run the snippets below using the node command. The code is contributed by [Mark Peterson](https://github.com/markpete)

![GitHub logo](https://www.odata.org/getting-started/understand-odata-in-6-steps/assets/Octocat.png)

#### Contribute to "Understanding OData in 6 steps"

Want to contribute code snippet for another platform or suggest changes to this content? You can edit and submit changes to "Understanding OData in 6 steps" on its [Github repository](https://github.com/ODataOrg/home-samples).

### Step 6: Invoking a function

In RESTful APIs, there can be some custom operations that contain complicated logic and can be frequently used. For that purpose, OData supports defining functions and actions to represent such operations. They are also resources themselves and can be bound to existing resources. After having explored the TripPin OData service, Russell finds out that the it has a function called GetInvolvedPeople from which he can find out the involved people of a specific trip. He invokes the function to find out who else other than him and Lewis goes to that trip in the U.S.

-   [HTTP request](https://www.odata.org/getting-started/understand-odata-in-6-steps/#http6)
-   [C#](https://www.odata.org/getting-started/understand-odata-in-6-steps/#csharp6)  
-   [Olingo JavaScript client](https://www.odata.org/getting-started/understand-odata-in-6-steps/#olingo-js-6)
-   [C++](https://www.odata.org/getting-started/understand-odata-in-6-steps/#odatacpp-6)
-   [Node.js](https://www.odata.org/getting-started/understand-odata-in-6-steps/#nodejs-6)
-   [Contribute](https://www.odata.org/getting-started/understand-odata-in-6-steps/#contribute-6)

```
GET https://services.odata.org/v4/(S(34wtn2c0hkuk5ekg0pjr513b))/TripPinServiceRW/People('russellwhyte')/Trips(0)/Microsoft.OData.SampleService.Models.TripPin.GetInvolvedPeople()
HTTP/1.1
OData-Version: 4.0
OData-MaxVersion: 4.0
```

```
var context = new DefaultContainer(new
Uri("https://services.odata.org/v4/(S(34wtn2c0hkuk5ekg0pjr513b))/TripPinServiceRW/"));
var trip = context.People.ByKey(userName: "russellwhyte").Trips.ByKey(tripId: 0).GetValue();
var people = trip.GetInvolvedPeople().Execute();
```

The client library used is the [OData v4 Client Code Generator](https://visualstudiogallery.msdn.microsoft.com/9b786c0e-79d1-4a50-89a5-125e57475937).

**Typed syntax**

```
var client = new ODataClient("https://services.odata.org/v4/TripPinServiceRW/");
var people = await client
    .For<People>()
    .Key("scottketchum")
    .NavigateTo<Trip>()
    .Key(0)
    .Function("GetInvolvedPeople")
    .ExecuteAsEnumerableAsync();
```

**Dynamic syntax**

```
var x = ODataDynamic.Expression;
var client = new ODataClient("https://services.odata.org/v4/TripPinServiceRW/");
var people = await client
    .For(x.People)
    .Key("scottketchum")
    .NavigateTo(x.Trips)
    .Key(0)
    .Function("GetInvolvedPeople")
    .ExecuteAsEnumerableAsync() as IEnumerable<dynamic>;
```

The client library used is the [Simple.OData.Client](https://github.com/object/Simple.OData.Client/wiki). The code is contributed by [Vagif Abilov](https://github.com/object)

```
var serviceRoot = 'https://services.odata.org/V4/(S(34wtn2c0hkuk5ekg0pjr513b))/TripPinServiceRW/';
var headers = { 'Content-Type': 'application/json', Accept: 'application/json' };
var request = {
    requestUri: serviceRoot + 'People('russellwhyte')/Trips(0)/Microsoft.OData.SampleService.Models.TripPin.GetInvolvedPeople()',
    method: 'GET',
    headers: headers,
    data: null
};
odatajs.oData.request(
    request,
    function (data, response) {
        var involvedPeople = data.value;
    },
    function (err) {
        alert('Fail: ' + err.Message);
    }
);
```

The client library used is the [Olingo OData Client for JavaScript](http://olingo.apache.org/doc/javascript/index.html).

```
auto service_context = std::make_shared<DefaultContainer>(U("https://services.odata.org/V4/(S(34wtn2c0hkuk5ekg0pjr513b))/TripPinServiceRW/"));
auto russell = service_context->create_people_query()->key(U("russellwhyte"))->expand(U("Trips"))->execute_query().get()[0];
auto trip = russell->get_trips()[0];
auto people = trip->GetInvolvedPeople().get();
```

The client library used is the [ODataCpp Client](https://github.com/odata/odatacpp-client). The code is contributed by [Bin Xu](https://github.com/bixu-ms)

```
var http = require('http');
var serviceRoot = 'https://services.odata.org/v4/TripPinServiceRW/';
getURL(serviceRoot + 'People('russellwhyte')/Trips(0)/Microsoft.OData.SampleService.Models.TripPin.GetInvolvedPeople()');
function getURL(url) {
    var body = '';
    http.get(url, function (response) {
        response.on('data', function (chunk) {
            body+=chunk;
        });
        response.on('end', function () {
            console.log(body);
        });
    }).on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });
}
```

Download and install the Node.js platform from [nodejs.org](http://nodejs.org/) then run the snippets below using the node command. The code is contributed by [Mark Peterson](https://github.com/markpete)

![GitHub logo](https://www.odata.org/getting-started/understand-odata-in-6-steps/assets/Octocat.png)

#### Contribute to "Understanding OData in 6 steps"

Want to contribute code snippet for another platform or suggest changes to this content? You can edit and submit changes to "Understanding OData in 6 steps" on its [Github repository](https://github.com/ODataOrg/home-samples).

© 2015-2022 OData – The Protocol for REST APIs