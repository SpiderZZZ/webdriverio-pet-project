"use strict";
class Counter {
    constructor() {
        this.innerC = 0;
    }
    get c() {
        this.innerC = this.innerC + 1;
        return this.innerC;
    }
}
let counter = new Counter();
console.log(`${counter.c} - file parsing`);
describe(`parent DESCRIBE block`, function () {
    console.log(`${counter.c} - file parsing - reading contetnt of describe block`);
    before(function () {
        console.log(`${counter.c} - beforeAll execution`);
    });
    before(function () {
        console.log(`${counter.c} - beforeAll execution - executed in declaration order`);
    });
    after(function () {
        console.log(`${counter.c} - afterALL execution`);
    });
    afterEach(function () {
        console.log(`${counter.c} - afterEACH execution`);
    });
    beforeEach(function () {
        console.log(`${counter.c} - before each execution`);
    });
    beforeEach(function () {
        console.log(`${counter.c} - before each execution - executed in declaration order`);
    });
    describe(`Nested describe block`, function () {
        console.log(`${counter.c} - file parsing - reading nested describe blocks as well`);
        beforeEach(function () {
            console.log(`${counter.c} - nested beforeEach executed!`);
        });
        it(`NESTED TEST!`, function () {
            console.log(`${counter.c} - NESTED TEST - executed`);
        });
    });
    //DATAPROVIDER
    let dataCollection = [1, 2, 3, 4, 5];
    dataCollection.map(data => {
        it(`${counter.c} TEST for ${data}`, function () {
            console.log(`TEST number ${data} executed!`);
        });
    });
});
console.log(`${counter.c} - file parsing finished`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jaGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0L21vY2hhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLE9BQU87SUFFVDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUFJLENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUUsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQTtJQUN0QixDQUFDO0NBQ0o7QUFDRCxJQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBRTVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQzNDLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRTtJQUM5QixPQUFPLENBQUMsR0FBRyxDQUNQLEdBQUcsT0FBTyxDQUFDLENBQUMsc0RBQXNELENBQ3JFLENBQUM7SUFFRixNQUFNLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtJQUNyRCxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO0lBQ3RGLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDckQsQ0FBQyxDQUFDLENBQUM7SUFFSCxTQUFTLENBQUM7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUN0RCxDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQztRQUVQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO0lBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBRUgsVUFBVSxDQUFDO1FBRVAsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLDBEQUEwRCxDQUFDLENBQUE7SUFDdkYsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsdUJBQXVCLEVBQUU7UUFFOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7UUFFcEYsVUFBVSxDQUFDO1lBRVAsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsY0FBYyxFQUFFO1lBRWYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUVILGNBQWM7SUFDZCxJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3RCLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLGFBQWEsSUFBSSxFQUFFLEVBQUU7WUFFaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLElBQUksWUFBWSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDO0FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMifQ==