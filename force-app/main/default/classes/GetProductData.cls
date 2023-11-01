public with sharing class GetProductData {
    @AuraEnabled(cacheable = true)
    public static Map<string, object> GetProductDataMethod() {

        http http = new http();
        HttpRequest request = new HttpRequest();
        string endpoint = 'https://dummyjson.com/products';
        request.setEndpoint(endpoint);
        request.setmethod('GET');

        HttpResponse response = http.send(request);
        system.debug('response---->'+response);
        Map<string, object> results = new Map<string, object>();

        if(response.getStatusCode()==200){
            results  = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            system.debug('results------>'+results);
            
        }    
        return results;
    }
    
}