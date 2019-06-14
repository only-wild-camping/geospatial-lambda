const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB();
const ddbGeo = require('dynamodb-geo');
const config = new ddbGeo.GeoDataManagerConfiguration(ddb, 'MyGeoTable');
const myGeoTableManager = new ddbGeo.GeoDataManager(config);

exports.handler = async function (event, context) {
    try {
        let data = await myGeoTableManager.queryRadius({
            RadiusInMeter: 1000,
            CenterPoint: {latitude: 51.50, longitude: -0.17}
        });
        return data;
    } catch (error) {
        console.error(error)
    }
}