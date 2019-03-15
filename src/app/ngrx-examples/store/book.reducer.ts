import * as fromBook from './book.actions';
import { Book, User2 } from './book.actions';
import { createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';


export interface BookState {
  selectedUser: User2;
  allBooks: Book[];
}

const listBooks: fromBook.Book[] = [{
  id: 1,
  userEmail: 'realcore@realcore.de',
  name: 'War and Peace'
},
{
  id: 2,
  userEmail: 'realcore@realcore.de',
  name: 'Song of Solomon'
},
{
  id: 3,
  userEmail: 'realcore2@realcore.de',
  name: 'Ulysses'
},
{
  id: 4,
  userEmail: 'realcore2@realcore.de',
  name: 'The Shadow of the Wind'
},
{
  id: 5,
  userEmail: 'realcore3@realcore.de',
  name: 'The Lord of the Rings'
}];

const initialBookState = {
  selectedUser: null,
  allBooks: listBooks
};

/**
 * Reducer method to change the state
 * @param state
 * @param action
 */
export function bookReducer( state = initialBookState, action: fromBook.actions ): BookState {
  switch (action.type) {
    case fromBook.SET_BOOK:
    return {
      selectedUser: {... action.user},
      allBooks: listBooks
    };

    default:
    return state;
  }
}

/**
 * Selector method to search users
 * @param state
 */
export const selectUser = (state: any) => state.books.selectedUser;
/**
 * Selector method to search all books
 * @param state
 */
export const selectAllBooks = (state: any) => state.books.allBooks;
/**
 * Selector function to search the books of an user
 */
export const selectVisibleBooks = (r) => createSelector(
  selectUser,
  selectAllBooks,
  (selectedUser: User2, allBooks: Book[]) => {
      if (selectedUser && selectedUser.email && allBooks) {
        return allBooks.filter((book: Book) => (book.userEmail === selectedUser.email));
      } else {
          return allBooks;
      }
  }
);



/* */
// const listBooks2: fromBook.Book[] = [{
//   id: 6,
//   userEmail: 'realcore@realcore.de',
//   name: 'The Minions'
// },
// {
//   id: 7,
//   userEmail: 'realcore@realcore.de',
//   name: 'Aladdin'
// }];

// let secondState = {
//   selectedUser: null,
//   allBooks: listBooks2
// };
// selectVisibleBooks(secondState);
// selectVisibleBooks(secondState);


// const listBooks3: fromBook.Book[] = [{
//   id: 8,
//   userEmail: 'realcore@realcore.de',
//   name: 'The Minions'
// }];
// secondState = {...secondState, allBooks: listBooks3};

// selectVisibleBooks(secondState);
