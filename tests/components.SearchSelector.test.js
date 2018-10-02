import {SearchSelector} from "../client/components/SearchSelector";
import {clearCards, addCards} from "../client/actions/cards";
import {data as fakeCards}  from "./testData.json";

test("getFakes dispatches correct actions", ()=> {
    //Arrange
    const mockDispatch = jest.fn();
    const testSelector = new SearchSelector({
        dispatch:mockDispatch
    });
    //Act
    testSelector.getFakes();
    //Assert
    expect(mockDispatch.mock.calls.length).toBe(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual(clearCards());
    expect(mockDispatch.mock.calls[1][0]).toEqual(addCards(fakeCards));
});

test("createQuery dispatches correct actions", ()=> {
    //Arrange
    const mockDispatch = jest.fn();
    const formatString = "f:standard";
    const testSelector = new SearchSelector({
        dispatch:mockDispatch,
        format: formatString
    });
    const mockGCFS = jest.fn();
    testSelector.getCardsFromScryfall = mockGCFS;
    //Act
    testSelector.createQuery();
    //Assert
    expect(mockDispatch.mock.calls.length).toBe(1);
    expect(mockDispatch.mock.calls[0][0]).toEqual(clearCards());
    expect(mockGCFS.mock.calls[0][0]).toEqual(`https://api.scryfall.com/cards/search?q=${formatString}`);
});

test("getCardsFromScryfall dispatches res.body.data when res.body.has_more == false", ()=> {
    //Arrange
    const mockGet = jest.fn();
    mockGet.mockReturnValue({
        body: {
            has_more:false,
            data:fakeCards
        }
    }); 
    const mockRequest = {
        get:mockGet
    };
    const mockDispatch = jest.fn();
    const testSelector = new SearchSelector({
        dispatch:mockDispatch,
    });
    testSelector.request = mockRequest;
    //Act
    testSelector.getCardsFromScryfall();
    //Assert
    expect(mockGet.mock.calls.length).toBe(1);
});