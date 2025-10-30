component extends="testbox.system.BaseSpec" {
    
    function run() {
        describe("HelloWorld Request Example", function() {
            
            it("should output 'Hello World!' when accessed", function() {
                cfhttp(
                    url="http://localhost:8888/examples/helloworld-1-request/",
                    method="GET",
                    result="local.result"
                );
                
                expect(local.result.fileContent).toInclude("Hello World!");
                
                expect(local.result.statusCode).toBe("200");
            });
            
            it("should have content type text/html", function() {
                cfhttp(
                    url="http://localhost:8888/examples/helloworld-1-request/",
                    method="GET",
                    result="local.result"
                );
                
                expect(local.result.responseHeader["Content-Type"]).toInclude("text/html");
            });
            
        });
    }
    
}
