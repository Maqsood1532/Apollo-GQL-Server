const { gql } = require("apollo-server-express");

const typeDefs = gql `

    type BookingRecord {
        bookingCode: String
        passengers: [Passenger]
    }

    type Passenger {
        firstName: String
        lastName: String
        title: Title
    }

    type Title {
        name: String
    }

    type BookingDetail {
        bookingCode: String
        itinerary: Itinerary
        passengers: Passenger
    }
    
    type Itinerary {
        type: String
        connections: [Connections]
    }
    
    type Connections {
        id: Int
        duration: String
        origin: Address
        destination: Address
        segments: [Segment]
    }
    
    type Address {
        IATACode: String
        name: String
        city: City
    }
    
    type City {
        IATACode: String
        name: String
        country: Country
    }
    
    type Country {
        code: String
        name: String
    }
    
    type Segment  {
        id: Int
        departFrom: Address
        arriveOn: Address
        marketingFlight: MarketingFlight
    }
    
    type MarketingFlight {
        number: String
        carrier: CodeName
        status: CodeName
        numberOfStops: Int
        operatingFlight: OperatingFlight
    }
    
    type OperatingFlight {
        number: String
        carrier: CodeName
        duration: String
        flown: String
        checkInStart: String
        localCheckInStart: String
        checkInEnd: String
        localCheckInEnd: String
        scheduledArrival: String
        localScheduledArrival: String
        scheduledDeparture: String
        localScheduledDeparture: String
        arrivalTerminal: ArrivalTerminal
        cabin: CodeName
        equipment: CodeName
    }
    
    type ArrivalTerminal {  
        name: String
    }
    
    type CodeName {
        code: String
        name: String
    }
    
    type Equipement {
        code: String
        name: String
    }


    # Queries 
    type Query {
        getBookingDetails: BookingDetail
        seachBooking(bookingCode: String!, lastName: String!) : BookingRecord
    }

    # Mutation

`;

module.exports = { typeDefs };
