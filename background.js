let kotlin1 = [
	{
		id: 1,
		title: "Q1. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val list = listOf(1, 2, 3, 4, 5) <br> println(list.subList(1, 3)) <br> }",
		choices: ["1. [1, 2, 3]", "2. [1, 2]", "3. [2, 3]", "4. [2, 3, 4]"],
		answer: "3. [2, 3]",
	},
	{
		id: 2,
		title: "Q2. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val x = 10 <br> val y = 20 <br> println(x.rangeTo(y)) <br> }",
		choices: ["1. 10..20", "2. 10..19", "3. 11..20", "4. 11..19"],
		answer: "1. 10..20",
	},
	{
		id: 3,
		title: "Q3. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val list = listOf(1, 2, 3, 4, 5) <br> println(list.filter { it % 2 == 0 }) <br> }",
		choices: [
			"1. [1, 2, 3, 4, 5]",
			"2. [2, 4]",
			"3. [1, 3, 5]",
			"4. [2, 3, 4]",
		],
		answer: "2. [2, 4]",
	},
	{
		id: 4,
		title: "Q4. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val x = 10 <br> val y = 20 <br> println(x..y step 2) <br> }",
		choices: [
			"1. 10, 12, 14, 16, 18, 20",
			"2. 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20",
			"3. 10, 12, 14, 16, 18",
			"4. 10, 11, 12, 13, 14, 15, 16, 17, 18, 19",
		],
		answer: "1. 10, 12, 14, 16, 18, 20",
	},
	{
		id: 5,
		title: "Q5. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val list = listOf(1, 2, 3, 4, 5) <br> println(list.map { it * 2 }) <br> }",
		choices: [
			"1. [1, 2, 3, 4, 5]",
			"2. [2, 4, 6, 8, 10]",
			"3. [1, 3, 5]",
			"4. [2, 3, 4]",
		],
		answer: "2. [2, 4, 6, 8, 10]",
	},
	{
		id: 6,
		title: "Q6. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val list = listOf(1, 2, 3, 4, 5) <br> println(list.reduce { acc, next -> acc + next }) <br> }",
		choices: ["1. 15", "2. 10", "3. 5", "4. 0"],
		answer: "1. 15",
	},
	{
		id: 7,
		title: "Q7. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val list = listOf(1, 2, 3, 4, 5) <br> println(list.fold(0) { acc, next -> acc + next }) <br> }",
		choices: ["1. 15", "2. 10", "3. 5", "4. 0"],
		answer: "1. 15",
	},
	{
		id: 8,
		title: "Q8. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val x = 10 <br> val y = 20 <br> println(x until y) <br> }",
		choices: ["1. 10..20", "2. 10..19", "3. 11..20", "4. 11..19"],
		answer: "2. 10..19",
	},
	{
		id: 9,
		title: "Q9. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val list = listOf(1, 2, 3, 4, 5) <br> println(list.any { it % 2 == 0 }) <br> }",
		choices: ["1. true", "2. false", "3. null", "4. 0"],
		answer: "1. true",
	},
	{
		id: 10,
		title: "Q10. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val list = listOf(1, 2, 3, 4, 5) <br> println(list.all { it % 2 == 0 }) <br> }",
		choices: ["1. true", "2. false", "3. null", "4. 0"],
		answer: "2. false",
	},
	{
		id: 11,
		title: "Q11. Which of the following is a valid way to declare a nullable string in Kotlin?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. String? name",
			"2. String name?",
			"3. nullable String name",
			"4. String name = null",
		],
		answer: "1. String? name",
	},
	{
		id: 12,
		title: "Q12. What is the purpose of the !! operator in Kotlin?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. It checks if a value is null and throws an exception if it is.",
			"2. It checks if a value is not null and throws an exception if it is not.",
			"3. It converts a nullable value to a non-nullable value.",
			"4. It is used to declare a nullable variable.",
		],
		answer: "1. It checks if a value is null and throws an exception if it is.",
	},
	{
		id: 13,
		title: "Q13. What is the purpose of the ? operator in Kotlin?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. It checks if a value is null and throws an exception if it is.",
			"2. It checks if a value is not null and throws an exception if it is not.",
			"3. It converts a nullable value to a non-nullable value.",
			"4. It is used to declare a nullable variable.",
		],
		answer: "3. It converts a nullable value to a non-nullable value.",
	},
	{
		id: 14,
		title: "Q14. What is the difference between `val` and `var` in Kotlin?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. `val` is for mutable variables, `var` is for immutable variables.",
			"2. `val` is for immutable variables, `var` is for mutable variables.",
			"3. `val` is for constant variables, `var` is for variables that can be changed.",
			"4. There is no difference.",
		],
		answer: "2. `val` is for immutable variables, `var` is for mutable variables.",
	},
	{
		id: 15,
		title: "Q15. What is the purpose of the `data` keyword in Kotlin?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. It is used to declare a data class.",
			"2. It is used to declare a mutable variable.",
			"3. It is used to declare an immutable variable.",
			"4. It is used to declare a function.",
		],
		answer: "1. It is used to declare a data class.",
	},
	{
		id: 16,
		title: "Q16. What is the output of this Jetpack Compose code?",
		text: undefined,
		code2: '@Composable fun Greeting(name: String) { <br> Text(text = "Hello, $name!") <br> }',
		choices: [
			"1. Hello, ",
			"2. Hello, $name!",
			"3. Hello, [name]",
			"4. Error",
		],
		answer: "2. Hello, $name!",
	},
	{
		id: 17,
		title: "Q17. What is the purpose of the `@Composable` annotation in Jetpack Compose?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. It is used to declare a composable function.",
			"2. It is used to declare a mutable variable.",
			"3. It is used to declare an immutable variable.",
			"4. It is used to declare a class.",
		],
		answer: "1. It is used to declare a composable function.",
	},

	{
		id: 19,
		title: "Q19. How do you handle permissions in an Android app using Kotlin?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. Use the `requestPermissions` method of the `Context` class.",
			"2. Use the `checkSelfPermission` method of the `Activity` class.",
			"3. Use the `ContextCompat.checkSelfPermission` method and `ActivityCompat.requestPermissions` methods.",
			"4. Use the `PermissionManager` class.",
		],
		answer: "3. Use the `ContextCompat.checkSelfPermission` method and `ActivityCompat.requestPermissions` methods.",
	},
	{
		id: 20,
		title: "Q20. Which of the following is a valid way to start an activity in an Android app using Kotlin?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. `startActivity(Intent(this, SecondActivity::class.java))`",
			"2. `start(SecondActivity::class.java)`",
			"3. `launchActivity(SecondActivity::class.java)`",
			"4. `openActivity(SecondActivity::class.java)`",
		],
		answer: "1. `startActivity(Intent(this, SecondActivity::class.java))`",
	},
	{
		id: 21,
		title: "Q21. How do you navigate between screens in Jetpack Compose?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. Use the `Navigation` class.",
			"2. Use the `startActivity` method.",
			"3. Use the `NavController` class.",
			"4. Use the `FragmentManager` class.",
		],
		answer: "3. Use the `NavController` class.",
	},
	{
		id: 22,
		title: "Q22. What is the purpose of the `ViewModel` class in Android?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. To hold and manage UI state.",
			"2. To handle background tasks.",
			"3. To manage database operations.",
			"4. To handle network requests.",
		],
		answer: "1. To hold and manage UI state.",
	},
	{
		id: 23,
		title: "Q23. What is the purpose of the `Flow` class in Kotlin?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. It is used to represent a sequence of values that can be emitted over time.",
			"2. It is used to perform asynchronous operations.",
			"3. It is used to manage UI state.",
			"4. It is used to handle database operations.",
		],
		answer: "1. It is used to represent a sequence of values that can be emitted over time.",
	},
	{
		id: 24,
		title: "Q24. What is the purpose of the `Room` persistence library in Android?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. To handle background tasks.",
			"2. To manage UI state.",
			"3. To provide an abstraction layer for SQLite.",
			"4. To handle network requests.",
		],
		answer: "3. To provide an abstraction layer for SQLite.",
	},
	{
		id: 25,
		title: "Q25. How do you set up accessibility in an Android app?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. By using the `AccessibilityService` class.",
			"2. By using the `AccessibilityManager` class.",
			"3. By using the `AccessibilityNodeInfo` class.",
			"4. All of the above.",
		],
		answer: "4. All of the above.",
	},
	{
		id: 26,
		title: "Q26. What is the purpose of the `DeviceAdmin` feature in Android?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. To manage system settings and policies.",
			"2. To access user data.",
			"3. To control hardware components.",
			"4. To perform background tasks.",
		],
		answer: "1. To manage system settings and policies.",
	},
	{
		id: 27,
		title: "Q27. How do you set up a `DeviceAdmin` in an Android app?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. By using the `DevicePolicyManager` class.",
			"2. By using the `DeviceAdminReceiver` class.",
			"3. By using the `DeviceAdminService` class.",
			"4. All of the above.",
		],
		answer: "4. All of the above.",
	},
	{
		id: 28,
		title: "Q28. What is the purpose of the `AlarmManager` class in Android?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. To schedule tasks to run at specific times.",
			"2. To manage background tasks.",
			"3. To handle network requests.",
			"4. To provide an abstraction layer for SQLite.",
		],
		answer: "1. To schedule tasks to run at specific times.",
	},
	{
		id: 29,
		title: "Q29. What is the purpose of the `ServiceManager` class in Android?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. To manage background tasks.",
			"2. To handle network requests.",
			"3. To provide an abstraction layer for SQLite.",
			"4. To manage system services.",
		],
		answer: "4. To manage system services.",
	},
	{
		id: 30,
		title: "Q30. How do you create a background service in an Android app using Kotlin?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. By extending the `Service` class.",
			"2. By using the `Job` class.",
			"3. By using the `CoroutineScope` class.",
			"4. All of the above.",
		],
		answer: "1. By extending the `Service` class.",
	},
	{
		id: 31,
		title: "Q31. What is the purpose of the `BroadcastReceiver` class in Android?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. To receive system broadcasts.",
			"2. To send system broadcasts.",
			"3. To handle network requests.",
			"4. To provide an abstraction layer for SQLite.",
		],
		answer: "1. To receive system broadcasts.",
	},
	{
		id: 32,
		title: "Q32. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val name: String? = null <br> println(name?.length) <br> }",
		choices: ["1. 0", "2. null", "3. Error", "4. 1"],
		answer: "2. null",
	},
	{
		id: 33,
		title: "Q33. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val list = listOf(1, 2, 3, 4, 5) <br> println(list.take(2)) <br> }",
		choices: ["1. [1, 2, 3]", "2. [1, 2]", "3. [2, 3]", "4. [2, 3, 4]"],
		answer: "2. [1, 2]",
	},
	{
		id: 34,
		title: "Q34. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val list = listOf(1, 2, 3, 4, 5) <br> println(list.drop(2)) <br> }",
		choices: ["1. [1, 2, 3]", "2. [1, 2]", "3. [3, 4, 5]", "4. [4, 5]"],
		answer: "3. [3, 4, 5]",
	},
	{
		id: 35,
		title: "Q35. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val list = listOf(1, 2, 3, 4, 5) <br> println(list.takeLast(2)) <br> }",
		choices: ["1. [1, 2]", "2. [3, 4]", "3. [4, 5]", "4. [3, 4, 5]"],
		answer: "3. [4, 5]",
	},
	{
		id: 36,
		title: "Q36. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val list = listOf(1, 2, 3, 4, 5) <br> println(list.dropLast(2)) <br> }",
		choices: ["1. [1, 2]", "2. [3, 4]", "3. [1, 2, 3]", "4. [1, 2, 3, 4]"],
		answer: "4. [1, 2, 3, 4]",
	},
	{
		id: 37,
		title: "Q37. How do you create a new `CoroutineScope` in Kotlin?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. `CoroutineScope(Dispatchers.IO)`",
			"2. `CoroutineScope()`",
			"3. `CoroutineScope(Dispatchers.Main)`",
			"4. `CoroutineScope(Dispatchers.Default)`",
		],
		answer: "1. `CoroutineScope(Dispatchers.IO)`",
	},
	{
		id: 38,
		title: "Q38. What is the purpose of the `Dispatchers.IO` coroutine dispatcher?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. It is used to run coroutines on the main thread.",
			"2. It is used to run coroutines on a background thread.",
			"3. It is used to run coroutines on a thread pool.",
			"4. It is used to run coroutines on a specific thread.",
		],
		answer: "2. It is used to run coroutines on a background thread.",
	},
	{
		id: 39,
		title: "Q39. What is the purpose of the `Dispatchers.Main` coroutine dispatcher?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. It is used to run coroutines on the main thread.",
			"2. It is used to run coroutines on a background thread.",
			"3. It is used to run coroutines on a thread pool.",
			"4. It is used to run coroutines on a specific thread.",
		],
		answer: "1. It is used to run coroutines on the main thread.",
	},
	{
		id: 40,
		title: "Q40. What is the purpose of the `Dispatchers.Default` coroutine dispatcher?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. It is used to run coroutines on the main thread.",
			"2. It is used to run coroutines on a background thread.",
			"3. It is used to run coroutines on a thread pool.",
			"4. It is used to run coroutines on a specific thread.",
		],
		answer: "3. It is used to run coroutines on a thread pool.",
	},
	{
		id: 41,
		title: "Q41. Which of the following is a valid way to create a `Flow` in Kotlin?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. `flow { emit(1) }`",
			"2. `Flow(1)`",
			"3. `flow(1)`",
			"4. `Flow.create { emit(1) }`",
		],
		answer: "1. `flow { emit(1) }`",
	},
	{
		id: 42,
		title: "Q42. How do you collect a `Flow` in Kotlin?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. `flow.collect { println(it) }`",
			"2. `flow.listen { println(it) }`",
			"3. `flow.subscribe { println(it) }`",
			"4. `flow.observe { println(it) }`",
		],
		answer: "1. `flow.collect { println(it) }`",
	},
	{
		id: 43,
		title: "Q43. What is the purpose of the `launch` function in Kotlin coroutines?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. It is used to launch a new coroutine.",
			"2. It is used to collect a `Flow`.",
			"3. It is used to create a `CoroutineScope`.",
			"4. It is used to manage UI state.",
		],
		answer: "1. It is used to launch a new coroutine.",
	},
	{
		id: 44,
		title: "Q44. How do you create a `Room` database in an Android app using Kotlin?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. By using the `Room.databaseBuilder` method.",
			"2. By using the `SQLiteOpenHelper` class.",
			"3. By using the `ContentProvider` class.",
			"4. By using the `SharedPreferences` class.",
		],
		answer: "1. By using the `Room.databaseBuilder` method.",
	},
	{
		id: 45,
		title: "Q45. How do you define an entity in `Room`?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. By using the `@Entity` annotation.",
			"2. By using the `@Table` annotation.",
			"3. By using the `@Database` annotation.",
			"4. By using the `@Dao` annotation.",
		],
		answer: "1. By using the `@Entity` annotation.",
	},
	{
		id: 46,
		title: "Q46. What is the purpose of a `DAO` in `Room`?",
		text: undefined,
		code2: "  ",
		choices: [
			"1. To define the database schema.",
			"2. To define data access methods.",
			"3. To manage database transactions.",
			"4. All of the above.",
		],
		answer: "2. To define data access methods.",
	},
	{
		id: 47,
		title: "Q47. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val x = 10 <br> val y = 20 <br> println(x > y) <br> }",
		choices: ["1. true", "2. false", "3. null", "4. 0"],
		answer: "2. false",
	},
	{
		id: 48,
		title: "Q48. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val x = 10 <br> val y = 20 <br> println(x < y) <br> }",
		choices: ["1. true", "2. false", "3. null", "4. 0"],
		answer: "1. true",
	},
	{
		id: 49,
		title: "Q49. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val x = 10 <br> val y = 20 <br> println(x == y) <br> }",
		choices: ["1. true", "2. false", "3. null", "4. 0"],
		answer: "2. false",
	},
	{
		id: 50,
		title: "Q50. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val x = 10 <br> val y = 20 <br> println(x != y) <br> }",
		choices: ["1. true", "2. false", "3. null", "4. 0"],
		answer: "1. true",
	},
	{
		id: 51,
		title: "Q51. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val x = 10 <br> val y = 20 <br> println(x >= y) <br> }",
		choices: ["1. true", "2. false", "3. null", "4. 0"],
		answer: "2. false",
	},
	{
		id: 52,
		title: "Q52. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val x = 10 <br> val y = 20 <br> println(x <= y) <br> }",
		choices: ["1. true", "2. false", "3. null", "4. 0"],
		answer: "1. true",
	},
	{
		id: 53,
		title: "Q53. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val x = 10 <br> val y = 20 <br> println(x + y) <br> }",
		choices: ["1. 10", "2. 20", "3. 30", "4. 1020"],
		answer: "3. 30",
	},
	{
		id: 54,
		title: "Q54. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val x = 10 <br> val y = 20 <br> println(x - y) <br> }",
		choices: ["1. 10", "2. 20", "3. 30", "4. -10"],
		answer: "4. -10",
	},
	{
		id: 55,
		title: "Q55. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val x = 10 <br> val y = 20 <br> println(x * y) <br> }",
		choices: ["1. 10", "2. 20", "3. 200", "4. 1020"],
		answer: "3. 200",
	},
	{
		id: 56,
		title: "Q56. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val x = 10 <br> val y = 20 <br> println(x / y) <br> }",
		choices: ["1. 1", "2. 2", "3. 0.5", "4. 10"],
		answer: "3. 0.5",
	},
	{
		id: 57,
		title: "Q57. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val x = 10 <br> val y = 20 <br> println(x % y) <br> }",
		choices: ["1. 10", "2. 20", "3. 0", "4. 10"],
		answer: "1. 10",
	},
	{
		id: 58,
		title: "Q58. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val x = 10 <br> println(x.toString()) <br> }",
		choices: ["1. 10", '2. "10"', "3. 10.0", '4. "10.0"'],
		answer: '2. "10"',
	},
	{
		id: 59,
		title: "Q59. What is the output of this code?",
		text: undefined,
		code2: 'fun main() { <br> val x = "10" <br> println(x.toInt()) <br> }',
		choices: ['1. "10"', "2. 10.0", "3. 10", "4. Error"],
		answer: "3. 10",
	},
	{
		id: 60,
		title: "Q60. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val x = 10 <br> println(x.toDouble()) <br> }",
		choices: ["1. 10.0", "2. 10", '3. "10.0"', '4. "10"'],
		answer: "1. 10.0",
	},
	{
		id: 61,
		title: "Q61. What is the output of this code?",
		text: undefined,
		code2: 'fun main() { <br> val x = "10.0" <br> println(x.toFloat()) <br> }',
		choices: ["1. 10.0", "2. 10", '3. "10.0"', '4. "10"'],
		answer: "1. 10.0",
	},
	{
		id: 62,
		title: "Q62. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val x = 10 <br> val y = 20 <br> println(x == 10 && y == 20) <br> }",
		choices: ["1. true", "2. false", "3. null", "4. 0"],
		answer: "1. true",
	},
	{
		id: 63,
		title: "Q63. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val x = 10 <br> val y = 20 <br> println(x == 10 || y == 30) <br> }",
		choices: ["1. true", "2. false", "3. null", "4. 0"],
		answer: "1. true",
	},
];

let kotlin2 = [
	{
		id: 1,
		title: "Q1. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val list = listOf(1, 2, 3, 4, 5) <br> println(list.subList(1, 3)) <br> }",
		choices: ["1. [1, 2, 3]", "2. [1, 2]", "3. [2, 3]", "4. [2, 3, 4]"],
		answer: "3. [2, 3]",
	},
	{
		id: 2,
		title: "Q2. What is the output of this code?",
		text: undefined,
		code2: "fun main() { <br> val x = 10 <br> val y = 20 <br> println(x.rangeTo(y)) <br> }",
		choices: ["1. 10..20", "2. 10..19", "3. 11..20", "4. 11..19"],
		answer: "1. 10..20",
	},
	{
		id: 3,
		title: "Q3. You would like to print each score on its own line with its cardinal position. Without using **var** or **val**, which method allows iteration with both the value and its position?",
		text: undefined,
		code2: "fun main() { <br> val highScores = listOf(4000, 2000, 10200, 12000, 9030) <br> }",
		choices: [
			"1. `.withIndex()`",
			"2. `.forEachIndexed()`",
			"3. `.forEach()`",
			"4. `.forIndexes()`",
		],
		answer: "1. `.withIndex()`",
	},
	{
		id: 4,
		title: "Q4. When the **Airplane** class is instantiated, it displays **Aircraft = null**, not **Aircraft = C130** why?",
		text: undefined,
		code2: 'abstract class Aircraft { <br> init { println("Aircraft = ${getName()}") } <br> abstract fun getName(): String <br> } <br> class Airplane(private val name: String) : Aircraft() { <br> override fun getName(): String = name <br> }',
		choices: [
			"1. Classes are initialized in the same order they are in the file, therefore, Aircraft should appear after Airplane",
			"2. The code needs to pass the parameter to the base class's primary constructor. Since it does not, it receives a null",
			"3. Abstract function always returns null",
			"4. A superclass is initialized before its subclass. Therefore, name has not been set before it is rendered",
		],
		answer: "4. A superclass is initialized before its subclass. Therefore, name has not been set before it is rendered",
	},
	{
		id: 5,
		title: "Q5. Kotlin interfaces and abstract classes are very similar. What is one thing abstract class can do that interfaces cannot?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. Only abstract classes are inheritable by subclasses",
			"2. Only abstract classes can inherit from multiple superclasses",
			"3. Only abstract classes can have abstract methods",
			"4. Only abstract classes can store state",
		],
		answer: "4. Only abstract classes can store state",
	},
	{
		id: 6,
		title: "Q6. Inside an extension function, what is the name of the variable that corresponds to the receiver object",
		text: undefined,
		code2: undefined,
		choices: [
			"1. The variable is named **it**",
			"2. The variable is named **this**",
			"3. The variable is named **receiver**",
			"4. The variable is named **default**",
		],
		answer: "2. The variable is named **this**",
	},
	{
		id: 7,
		title: "Q7. Your application has an **add** function. How could you use its **invoke** methods and display the results?",
		text: undefined,
		code2: "fun add(a: Int, b: Int): Int { <br> return a + b <br> }",
		choices: [
			"1. `println(add(5,10).invoke())`",
			"2. `println(::add.invoke(5, 10))`",
			"3. `println(::add.invoke{5, 10})`",
			"4. `println(add.invoke(5,10))`",
		],
		answer: "2. `println(::add.invoke(5, 10))`",
	},
	{
		id: 8,
		title: "Q8. What is the entry point for a Kotlin application?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `fun static main(){}`",
			"2. `fun main(){}`",
			"3. `fun Main(){}`",
			"4. `public static void main(){}`",
		],
		answer: "2. `fun main(){}`",
	},
	{
		id: 9,
		title: "Q9. You are writing a console app in Kotlin that processes tests entered by the user. If the user enters an empty string, the program exits. Which kind of loop would work best for this app? Keep in mind that the loop is entered at least once",
		text: undefined,
		code2: undefined,
		choices: [
			"1. a do..while loop",
			"2. a for loop",
			"3. a while loop",
			"4. a forEach loop",
		],
		answer: "1. a do..while loop",
	},
	{
		id: 10,
		title: "Q10. You pass an integer to a function expecting type Any. It works without issue. Why is a primitive integer able to work with a function that expects an object?",
		text: undefined,
		code2: 'fun showHashCode(obj: Any){ <br> println("${obj.hashCode()}") <br> } <br> fun main() { <br> showHashCode(1) <br> }',
		choices: [
			"1. While the code runs, it does not produce correct results",
			"2. The integer is always a class",
			"3. The compiler runs an implicit `.toClass()` method on the integer",
			"4. The integer is autoboxed to a Kotlin Int class",
		],
		answer: "4. The integer is autoboxed to a Kotlin Int class",
	},
	{
		id: 11,
		title: "Q11. You have started a long-running coroutine whose job you have assigned to a variable named **task**. If the need arose, how could you abort the coroutine?",
		text: undefined,
		code2: "val task = launch { <br> // long running job <br> }",
		choices: [
			"1. `task.join()`",
			"2. `task.abort()`",
			"3. `job.stop()`",
			"4. `task.cancel()`",
		],
		answer: "4. `task.cancel()`",
	},
	{
		id: 12,
		title: "Q12. You are attempting to assign an integer variable to a long variable, but the Kotlin compiler flags it as an error. Why?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. You must wrap all implicit conversions in a try/catch block",
			"2. You can only assign `Long` to an `Int`, not the other way around",
			"3. There is no implicit conversion from `Int` to `Long`",
			"4. All integers in Kotlin are of type `Long`",
		],
		answer: "3. There is no implicit conversion from `Int` to `Long`",
	},
	{
		id: 13,
		title: "Q13. You have written a snippet of code to display the results of the roll of a six-sided die. When the die displays from 3 to 6 inclusive, you want to display a special message. Using a Kotlin range, what code should you add?",
		text: undefined,
		code2: 'when (die) { <br> 1 -> println("die is 1") <br> 2 -> println("die is 2") <br> ___ -> println("die is between 3 and 6") <br> else -> println("die is unknown") <br> }',
		choices: [
			"1. `3,4,5,6`",
			"2. `in 3..6`",
			"3. `3 : 6`",
			"4. `{3,4,5,6}`",
		],
		answer: "2. `in 3..6`",
	},
	{
		id: 14,
		title: 'Q14. The function **typeChecker** receives a parameter **obj** of type **Any**. Based upon the type of **obj**, it prints different messages for Int, String, Double, and Float types; if not any of the mentioned types, it prints "unknown type". What operator allows you to determine the type of an object?',
		text: undefined,
		code2: undefined,
		choices: ["1. `instanceof`", "2. `is`", "3. `typeof`", "4. `as`"],
		answer: "2. `is`",
	},
	{
		id: 15,
		title: "Q15. This code does not print any output to the console. What is wrong?",
		text: undefined,
		code2: 'firstName?.let { <br> println("Greeting $firstname!") <br> }',
		choices: [
			"1. A null pointer exception is thrown",
			"2. `firstName` is equal to `null`",
			"3. `firstName` is equal to an empty string",
			"4. `firstName` is equal to Boolean `false`",
		],
		answer: "2. `firstName` is equal to `null`",
	},
	{
		id: 16,
		title: "Q16. You have written a function simple() that is called frequently in your code. You place the inline prefix on the function. What effect does it have on the code?",
		text: undefined,
		code2: "inline fun simple(x: Int): Int{ <br> return x * x <br> } <br> fun main() { <br> for(count in 1..1000) { <br> simple(count) <br> } <br> }",
		choices: [
			"1. The code will give a stack overflow error",
			"2. The compiler warns of insignificant performance impact",
			"3. The compiler warns of significant memory usage",
			"4. The code is significantly faster",
		],
		answer: "2. The compiler warns of insignificant performance impact",
	},
	{
		id: 17,
		title: "Q17. How do you fill in the blank below to display all of the even numbers from 1 to 10 with least amount of code?",
		text: undefined,
		code2: 'for (_____) { <br> println("There are $count butterflies.") <br> }',
		choices: [
			"1. `count in 1..10`",
			"2. `count in 2..10 step 2`",
			"3. `count in 1..10 % 2`",
			"4. `var count=2; count <= 10; count+=2`",
		],
		answer: "2. `count in 2..10 step 2`",
	},
	{
		id: 18,
		title: "Q18. What value is printed by println()?",
		text: undefined,
		code2: 'val set = setOf("apple", "pear", "orange", "apple") <br> println(set.count())',
		choices: ["1. 3", "2. 4", "3. 1", "4. 5"],
		answer: "1. 3",
	},
	{
		id: 19,
		title: "Q19. Which line of code shows how to display a nullable string's length and shows 0 instead of null?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `println(b!!.length ?: 0)`",
			"2. `println(b?.length ?: 0)`",
			"3. `println(b?.length ?? 0)`",
			"4. `println(b == null? 0: b.length)`",
		],
		answer: "2. `println(b?.length ?: 0)`",
	},
	{
		id: 20,
		title: "Q20. In the file main.kt, you are filtering a list of integers and want to use an already existing function, removeBadValues. What is the proper way to invoke the function from filter in the line below?",
		text: undefined,
		code2: "val list2 = (80..100).toList().filter(_____)",
		choices: [
			"1. `::removeBadValues`",
			"2. `GlobalScope.removeBadValues()`",
			"3. `Mainkt.removeBadValues`",
			"4. `removeBadValues`",
		],
		answer: "1. `::removeBadValues`",
	},
	{
		id: 21,
		title: 'Q21. Which code snippet correctly shows a for loop using a range to display "1 2 3 4 5 6"?',
		text: undefined,
		code2: undefined,
		choices: [
			'1. `for(z in 1..7) println("$z ")`',
			'2. `for(z in 1..6) print("$z ")`',
			'3. `for(z in 1 to 6) print("$z ")`',
			'4. `for(z in 1..7) print("$z ")`',
		],
		answer: '2. `for(z in 1..6) print("$z ")`',
	},
	{
		id: 22,
		title: "Q22. You are upgrading a Java class to Kotlin. What should you use to replace the Java class's static fields?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. an anonymous object",
			"2. a static property",
			"3. a companion object",
			"4. a backing field",
		],
		answer: "3. a companion object",
	},
	{
		id: 23,
		title: "Q23. Your code need to try casting an object. If the cast is not possible, you do not want an exception generated, instead you want null to be assigned. Which operator can safely cast a value?",
		text: undefined,
		code2: undefined,
		choices: ["1. `as?`", "2. `??`", "3. `is`", "4. `as`"],
		answer: "1. `as?`",
	},
	{
		id: 24,
		title: "Q24. Kotlin will not compile this code snippet. What is wrong?",
		text: undefined,
		code2: "class Employee <br> class Manager : Employee()",
		choices: [
			"1. In order to inherit from a class, it must be marked **open**",
			"2. In order to inherit from a class, it must be marked **public**",
			"3. In order to inherit from a class, it must be marked **sealed**",
			"4. In order to inherit from a class, it must be marked **override**",
		],
		answer: "1. In order to inherit from a class, it must be marked **open**",
	},
	{
		id: 25,
		title: "Q25. Which function changes the value of the element at the current iterator location?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `change()`",
			"2. `modify()`",
			"3. `set()`",
			"4. `assign()`",
		],
		answer: "3. `set()`",
	},
	{
		id: 26,
		title: "Q26. From the Supervisor subclass, how do you call the Employee class's display() method?",
		text: undefined,
		code2: 'open class Employee(){ <br> open fun display() = println("Employee display()") <br> } <br> class Supervisor : Employee() { <br> override fun display() { <br> println("Supervisor display()") <br> } <br> }',
		choices: [
			"1. `Employee.display() `",
			"2. `::display()`",
			"3. `super.display()`",
			"4. `override.display()`",
		],
		answer: "3. `super.display()`",
	},
	{
		id: 27,
		title: "Q27. The code below was compiled and executed without issue before the addition of the line declaring errorStatus. Why does this line break the code?",
		text: undefined,
		code2: "sealed class Status(){ <br> object Error : Status() <br> class Success : Status() <br> } <br> fun main(){ <br> var successStatus = Status.Success() <br> var errorStatus = Status.Error() <br> }",
		choices: [
			"1. `StatusError` is an object, not a class and cannot be instantiated",
			"2. Only one instance of the class `Status` can be instantiated at a time",
			"3. `Status.Error` must be declared as an immutable type",
			"4. `Status.Error` is pribate to class and cannot be declared externally",
		],
		answer: "1. `StatusError` is an object, not a class and cannot be instantiated",
	},
	{
		id: 28,
		title: "Q28. The code below is expected to display the numbers from 1 to 10, but it does not. Why?",
		text: undefined,
		code2: "val seq = sequence { yieldAll(1..20) } <br> .filter { it < 11 } <br> println(seq)",
		choices: [
			"1. You cannot assign a sequence to a variable",
			"2. To produce result, a sequence must have terminal operation. In this case, it needs a `.toList()`",
			"3. The `.filter{ it < 11 }` should be `.filter{ it > 11 }`",
			"4. The `yieldAll(1..20)` should be `yieldAll(1..10)`",
		],
		answer: "2. To produce result, a sequence must have terminal operation. In this case, it needs a `.toList()`",
	},
	{
		id: 29,
		title: "Q29. What three methods does this class have?",
		text: undefined,
		code2: "class Person",
		choices: [
			"1. `equals(), hashCode(), and toString()`",
			"2. `equals(), toHash(), and super()`",
			"3. `print(), println(), and toString()`",
			"4. `clone(), equals(), and super()`",
		],
		answer: "1. `equals(), hashCode(), and toString()`",
	},
	{
		id: 30,
		title: "Q30. Which is the proper way to declare a singleton named DatabaseManager?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `object DatabaseManager {}`",
			"2. `singleton DatabaseManager {}`",
			"3. `static class DatabaseManager {}`",
			"4. `data class DatabaseManager {}`",
		],
		answer: "1. `object DatabaseManager {}`",
	},
	{
		id: 31,
		title: "Q31. In order to subclass the Person class, what is one thing you must do?",
		text: undefined,
		code2: "abstract class Person(val name: String) { <br> abstract fun displayJob(description: String) <br> }",
		choices: [
			"1. The subclass must be marked sealed",
			"2. You must override the `displayJob()` method",
			"3. You must mark the subclass as final",
			"4. An abstract class cannot be extended, so you must change it to open",
		],
		answer: "2. You must override the `displayJob()` method",
	},
	{
		id: 32,
		title: "Q32. The code snippet below translates a database user to a model user. Because their names are both User, you must use their fully qualified names, which is cumbersome. You do not have access to either of the imported classes' source code. How can you shorten the type names?",
		text: undefined,
		code2: 'import com.tekadept.app.model.User <br> import com.tekadept.app.database.User <br> class UserService{ <br> fun translateUser(user: com.tekadept.app.database.User): User = <br> com.tekadept.app.model.User("${user.first} ${user.last}") <br> }',
		choices: [
			"1. Use import as to change the type name",
			"2. Create subtypes with shorter names",
			"3. Create interfaces with shorter names",
			"4. Create extension classes with shorter names",
		],
		answer: "1. Use import as to change the type name",
	},
	{
		id: 33,
		title: "Q33. Your function is passed by a parameter obj of type Any. Which code snippet shows a way to retrieve the original type of obj, including package information?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `obj.classInfo()`",
			"2. `obj.typeInfo()`",
			"3. `obj::class.simpleName`",
			"4. `obj::class`",
		],
		answer: "4. `obj::class`",
	},
	{
		id: 34,
		title: "Q34. Which is the correct declaration of an integer array with a size of 5?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `val arrs[5]: Int`",
			"2. `val arrs = IntArray(5)`",
			"3. `val arrs: Int[5]`",
			"4. `val arrs = Array<Int>(5)`",
		],
		answer: "2. `val arrs = IntArray(5)`",
	},
	{
		id: 35,
		title: "Q35. You have created a class that should be visible only to the other code in its module. Which modifier do you use?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `internal`",
			"2. `private`",
			"3. `public`",
			"4. `protected`",
		],
		answer: "1. `internal`",
	},
	{
		id: 36,
		title: "Q36. Kotlin has two equality operators, == and ===. What is the difference?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `==` determines if two primitive types are identical. `===` determines if two objects are identical",
			"2. `==` determines if two references point to the same object. `===` determines if two objects have the same value",
			"3. `==` determines if two objects have the same value. `===` determines if two strings have the same value",
			"4. `==` determines if two objects have the same value. `===` determines if two references point to the same object",
		],
		answer: "4. `==` determines if two objects have the same value. `===` determines if two references point to the same object",
	},
	{
		id: 37,
		title: "Q37. Which snippet correctly shows setting the variable max to whichever variable holds the greatest value, a or b, using idiomatic Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `val max3 = a.max(b)`",
			"2. `val max = a > b ? a : b`",
			"3. `val max = if (a > b) a else b`",
			"4. `if (a > b) max = a else max = b`",
		],
		answer: "3. `val max = if (a > b) a else b`",
	},
	{
		id: 38,
		title: "Q38. You have an enum class Signal that represents the state of a network connection. You want to print the position number of the SENDING enum. Which line of code does that?",
		text: undefined,
		code2: "enum class Signal { OPEN, CLOSED, SENDING }",
		choices: [
			"1. `println(Signal.SENDING.position())`",
			"2. `println(Signal.SENDING.hashCode())`",
			"3. `println(Signal.SENDING)`",
			"4. `println(Signal.SENDING.ordinal)`",
		],
		answer: "4. `println(Signal.SENDING.ordinal)`",
	},
	{
		id: 39,
		title: "Q39. Both const and @JvmField create constants. What can const do that @JvmField cannot?",
		text: undefined,
		code2: 'class Detail { <br> companion object { <br> const val COLOR = "Blue" <br> @JvmField val SIZE = "Really Big" <br> } <br> }',
		choices: [
			"1. `const` is compatible with Java, but `@JvmField` is not",
			"2. The compiler will inline const so it is faster and more memory efficient",
			"3. Virtually any type can be used with const but not `@JvmField`",
			"4. const can also be used with mutable types",
		],
		answer: "2. The compiler will inline const so it is faster and more memory efficient",
	},
	{
		id: 40,
		title: "Q40. You have written a when expression for all of the subclasses of the class Attribute. To satisfy the when, you must include an else clause. Unfortunately, whenever a new subclass is added, it returns unknown. You would prefer to remove the else clause so the compiler generates an error for unknown subtypes. What is one simple thing you can do to achieve this?",
		text: undefined,
		code2: 'open class Attribute <br> class Href: Attribute() <br> class Src: Attribute() <br> class Alt: Attribute() <br> fun getAttribute(attribute: Attribute) : String { <br> return when (attribute) { <br> is Href -> "href" <br> is Alt -> "alt" <br> is Src -> "src" <br> else -> "unknown" <br> } <br> }',
		choices: [
			"1. Replace `open` with `closed`",
			"2. Replace `open` with `sealed`",
			"3. Replace `open` with `private`",
			"4. Replace `open` with `public`",
		],
		answer: "2. Replace `open` with `sealed`",
	},
	{
		id: 41,
		title: "Q41. You would like to know each time a class property is updated. Which code snippet shows a built-in delegated property that can accomplish this?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `Delegates.watcher()`",
			"2. `Delegates.observable()`",
			"3. `Delegates.rx()`",
			"4. `Delegates.observer()`",
		],
		answer: "2. `Delegates.observable()`",
	},
	{
		id: 42,
		title: "Q42. Why doesn't this code compile?",
		text: undefined,
		code2: 'val addend = 1 <br> infix fun Int.add(added: Int=1) = this + addend <br> fun main(){ <br> val msg = "Hello" <br> println( msg shouldMatch "Hello") <br> println( 10 multiply 5 + 2) <br> println( 10 add 5) <br> }',
		choices: [
			"1. infix function must be marked public",
			"2. In Kotlin, add is a keyword",
			"3. Extension functions use `it`, not `this`, as the default parameter name",
			"4. infix functions cannot have default values",
		],
		answer: "4. infix functions cannot have default values",
	},
	{
		id: 43,
		title: "Q43. What is the correct way to initialize a nullable variable?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `val name = null`",
			"2. `var name: String`",
			"3. `val name: String`",
			"4. `val name: String? = null`",
		],
		answer: "4. `val name: String? = null`",
	},
	{
		id: 44,
		title: "Q44. Which line of code is a shorter, more idiomatic version of the displayed snippet?",
		text: undefined,
		code2: "val len: Int = if (x != null) x.length else -1",
		choices: [
			"1. `val len = x?.let{x.len} else {-1}`",
			"2. `val len = x!!.length ?: -1`",
			"3. `val len:Int = (x != null)? x.length : -1`",
			"4. `val len = x?.length ?: -1`",
		],
		answer: "4. `val len = x?.length ?: -1`",
	},
	{
		id: 45,
		title: "Q45. You are creating a Kotlin unit test library. What else you should add to make the following code compile without error?",
		text: undefined,
		code2: 'fun String.shouldEqual(value: String) = this == value <br> fun main(){ <br> val msg = "test message" <br> println(msg shouldEqual "test message") <br> }',
		choices: [
			"1. The extension function should be marked `public`",
			"2. Add the prefix `operator` to the `shouldMatch` extension function",
			'3. The code is not legal in Kotlin (should be `println(msg.shouldEqual("test message"))`) ',
			"4. Add the prefix `infix` to the `shouldMatch` extension function",
		],
		answer: "4. Add the prefix `infix` to the `shouldMatch` extension function",
	},
	{
		id: 46,
		title: "Q46. What is the difference between the declarations of COLOR and SIZE?",
		text: undefined,
		code2: 'class Record{ <br> companion object { <br> const val COLOR = "Red" <br> val SIZE = "Large" <br> } <br> }',
		choices: [
			"1. Since `COLOR` and `SIZE` are both immutable, they are identical internally",
			"2. Both are immutable, but the use of the keyword const makes `COLOR` slower and less space efficient than `SIZE`",
			"3. const makes `COLOR` faster, but not compatible with Java. Without const, `SIZE` is still compatible with Java",
			"4. Both are immutable, but the use of the keyword const makes `COLOR` faster and more space efficient than `SIZE`",
		],
		answer: "4. Both are immutable, but the use of the keyword const makes `COLOR` faster and more space efficient than `SIZE`",
	},
	{
    "id": 48,
    "title": "Q48. The code below shows a typical way to show both index and value in many languages, including Kotlin. Which line of code shows a way to get both index and value more idiomatically?",
    "text": undefined,
    "code2": "var ndx = 0; <br> for (value in 1..5){ <br> println(\"$ndx - $value\") <br> ndx++ <br> }",
    "choices": [
      "1. `for( (ndx, value) in (1..20).withIndex() ){`",
      "2. `for( (ndx, value) in (1..20).pair() ){`",
      "3. `for( Pair(ndx, value) in 1..20 ){`",
      "4. `for( (ndx, value) in *(1..20) ){`"
    ],
    "answer": "1. `for( (ndx, value) in (1..20).withIndex() ){`"
  },
  {
    "id": 49,
    "title": "Q49. The Kotlin .. operator can be written as which function?",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. `a.from(b)`",
      "2. `a.range(b)`",
      "3. `a.rangeTo(b)`",
      "4. `a.to(b)`"
    ],
    "answer": "3. `a.rangeTo(b)`"
  },
  {
    "id": 50,
    "title": "Q50. How can you retrieve the value of the property codeName without referring to it by name or destructuring?",
    "text": undefined,
    "code2": "data class Project(var codeName: String, var version: String) <br> fun main(){ <br> val proj = Project(\"Chilli Pepper\", \"2.1.0\") <br> }",
    "choices": [
      "1. `proj.0`",
      "2. `proj[0]`",
      "3. `proj[1]`",
      "4. `proj.component1()`"
    ],
    "answer": "4. `proj.component1()`"
  },
  {
    "id": 51,
    "title": "Q51. This function generates the Fibonacci sequence. Which function is missing?",
    "text": undefined,
    "code2": "fun fibonacci() = sequence { <br> var params = Pair(0, 1) <br> while (true) { <br> ___ (params.first) <br> params = Pair(params.second, params.first + params.second) <br> } <br> }",
    "choices": [
      "1. `with()`",
      "2. `yield()`",
      "3. `skip()`",
      "4. `return()`"
    ],
    "answer": "2. `yield()`"
  },
  {
    "id": 52,
    "title": "Q52. In this code snippet, why does the compiler not allow the value of y to change?",
    "text": undefined,
    "code2": "for(y in 1..100) y+=2",
    "choices": [
      "1. `y` must be declared with `var` to be mutable",
      "2. `y` is an implicitly immutable value",
      "3. `y` can change only in a while loop",
      "4. In order to change `y`, it must be declared outside of the loop"
    ],
    "answer": "2. `y` is an implicitly immutable value"
  },
  {
    "id": 53,
    "title": "Q53. You have created a data class, Point, that holds two properties, x and y, representing a point on a grid. You want to use the hash symbol for subtraction on the Point class, but the code as shown will not compile. How can you fix it?",
    "text": undefined,
    "code2": "data class Point(val x: Int, val y: Int) <br> operator fun Point.plus(other: Point) = Point(x + other.x, y + other.y) <br> operator fun Point.hash(other: Point) = Point(x - other.x, y - other.y) <br> fun main() { <br> val point1 = Point(10, 20) <br> val point2 = Point(20, 30) <br> println(point1 + point2) <br> println(point1 # point2) <br> }",
    "choices": [
      "1. You cannot; the hash symbol is not a valid operator.",
      "2. You should replace the word hash with octothorpe, the actual name for the symbol.",
      "3. You should use `minus` instead of hash, then type alias the minus symbol.",
      "4. You need to replace the operator with the word `infix`."
    ],
    "answer": "3. You should use `minus` instead of hash, then type alias the minus symbol."
  },
  {
    "id": 54,
    "title": "Q54. This code snippet compiles and runs without issue, but does not wait for the coroutine to show the \"there\" message. Which line of code will cause the code to wait for the coroutine to finish before exiting?",
    "text": undefined,
    "code2": "fun main() = runBlocking { <br> val task = GlobalScope.launch { <br> delay(1000L) <br> println(\"there\") <br> } <br> println(\"Hello,\") <br> }",
    "choices": [
      "1. `task.complete()`",
      "2. `task.wait()`",
      "3. `task.join()`",
      "4. `task.cancel()`"
    ],
    "answer": "3. `task.join()`"
  },
  {
    "id": 55,
    "title": "Q55. You would like to group a list of students by last name and get the total number of groups. Which line of code accomplishes this, assuming you have a list of the Student data class?",
    "text": undefined,
    "code2": "data class Student(val firstName: String, val lastName: String)",
    "choices": [
      "1. `println(students.groupBy{ it.lastName }.count())`",
      "2. `println(students.groupBy{ it.lastName.first() }.fold().count())`",
      "3. `println(students.groupingBy{ it.lastName.first() }.count())`",
      "4. `println(students.groupingBy{ it.lastName.first() }.size())`"
    ],
    "answer": "1. `println(students.groupBy{ it.lastName }.count())`"
  },
  {
    "id": 56,
    "title": "Q56. Class BB inherits from class AA. BB uses a different method to calculate the price. As shown, the code does not compile. What changes are needed to resolve the compilation error?",
    "text": undefined,
    "code2": "open class AA() { <br> var price: Int = 0 <br> get() = field + 10 <br> } <br> class BB() : AA() { <br> var price: Int = 0 <br> get() = field + 20 <br> }",
    "choices": [
      "1. You need to add a `lateinit` modifier to `AA.price`.",
      "2. You simply need to add an `override` modifier to `BB.price`.",
      "3. You need to add an `open` modifier to `AA.price` and an `override` modifier to `BB.price`.",
      "4. You need to add a `public` modifier to `AA.price` and a `protected` modifier to `BB.price`."
    ],
    "answer": "3. You need to add an `open` modifier to `AA.price` and an `override` modifier to `BB.price`."
  },
  {
    "id": 57,
    "title": "Q57. What is the output of this code?",
    "text": undefined,
    "code2": "val quote = \"The eagle has landed.\" <br> println(\"The length of the quote is $quote.length\")",
    "choices": [
      "1. The length of the quote is The eagle has landed.",
      "2. A compilation error is displayed.",
      "3. The length of the quote is `21`",
      "4. The length of the quote is `The eagle has landed..length`"
    ],
    "answer": "4. The length of the quote is `The eagle has landed..length`"
  },
  {
    "id": 58,
    "title": "Q58. You have an unordered list of high scores. Which is the simple method to sort the highScores in descending order?",
    "text": undefined,
    "code2": "fun main() { <br> val highScores = listOf(4000, 2000, 10200, 12000, 9030)",
    "choices": [
      "1. `.sortedByDescending()`",
      "2. `.descending()`",
      "3. `.sortedDescending()`",
      "4. `.sort(\"DESC\")`"
    ],
    "answer": "3. `.sortedDescending()`"
  },
  {
    "id": 59,
    "title": "Q59. Your class has a property name that gets assigned later. You do not want it to be a nullable type. Using a delegate, how should you declare it?",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. `lateinit var name: String`",
      "2. `var name: String by lazy`",
      "3. `var name: String by Delegates.notNull()`",
      "4. `var name: String? = null`"
    ],
    "answer": "3. `var name: String by Delegates.notNull()`"
  },
  {
    "id": 60,
    "title": "Q60. You want to know each time a class property is updated. If the new value is not within range, you want to stop the update. Which code snippet shows a built-in delegated property that can accomplish this?",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. `Delegates.vetoable()`",
      "2. `Delegates.cancellable()`",
      "3. `Delegates.observer()`",
      "4. `Delegates.watcher()`"
    ],
    "answer": "1. `Delegates.vetoable()`"
  },
  {
    "id": 61,
    "title": "Q61. Which line of code shows how to call a Fibonacci function, bypass the first three elements, grab the next six, and sort the elements in descending order?",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. `val sorted = fibonacci().skip(3).take(6).sortedDescending().toList()`",
      "2. `val sorted = fibonacci().skip(3).take(6).sortedByDescending().toList()`",
      "3. `val sorted = fibonacci().skip(3).limit(6).sortedByDescending().toList()`",
      "4. `val sorted = fibonacci().drop(3).take(6).sortedDescending().toList()`"
    ],
    "answer": "4. `val sorted = fibonacci().drop(3).take(6).sortedDescending().toList()`"
  },
  {
    "id": 62,
    "title": "Q62. You have two arrays, a and b. Which line combines a and b as a list containing the contents of both?",
    "text": undefined,
    "code2": "val a = arrayOf(1, 2, 3) <br> val b = arrayOf(100, 200, 3000)",
    "choices": [
      "1. `val c = list of (a, b)`",
      "2. `val c = a + b`",
      "3. `val c = listOf(a+b)`",
      "4. `val c = listOf(*a, *b)`"
    ],
    "answer": "4. `val c = listOf(*a, *b)`"
  },
  {
    "id": 63,
    "title": "Q63. This code occasionally throws a null pointer exception (NPE). How can you change the code so it never throws as NPE?",
    "text": undefined,
    "code2": "println(\"length of First Name = \${firstName!!.length}\")",
    "choices": [
      "1. Replace `!!.` with `?.`",
      "2. Replace `!!.` with `?:.`",
      "3. Surround the line with a try/catch block.",
      "4. Replace `!!.` with `?.let`."
    ],
    "answer": "1. Replace `!!.` with `?.`"
  },
  {
    "id": 64,
    "title": "Q64. What is the execution order of init blocks and properties during initialization?",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. All of the properties are executed in order of appearance, and then the init blocks are executed.",
      "2. The init blocks and properties are executed in the same order they appear in the code.",
      "3. All of the init blocks are executed in order of appearance, and then the properties are executed.",
      "4. The order of execution is not guaranteed, so code should be written accordingly."
    ],
    "answer": "2. The init blocks and properties are executed in the same order they appear in the code."
  },
  {
    "id": 65,
    "title": "Q65. Both const and @JvmField create constants. What can @JvmField do that const cannot?",
    "text": undefined,
    "code2": "class Styles { <br> companion object { <br> const val COLOR = \"Blue\" <br> @JvmField val SIZE = \"Really big\" <br> } <br> }",
    "choices": [
      "1. `const` works only with strings and primitives. `@JvmField` does not have that restriction.",
      "2. `@JvmField` works as a top-level variable, but `const` works only in a class.",
      "3. `@JvmField` is compatible with Java, but `const` is not.",
      "4. `@JvmField` is always inlined for faster code."
    ],
    "answer": "1. `const` works only with strings and primitives. `@JvmField` does not have that restriction."
  },
  {
    "id": 66,
    "title": "Q66. What are the two ways to make a coroutine's computation code cancellable?",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. Call the `yield()` function or check the `isActive` property.",
      "2. Call the `cancelled()` function or check the `isActive` property.",
      "3. Call the `stillActive()` function or check the `isCancelled` property.",
      "4. Call the `checkCancelled()` function or check the `isCancelled` property."
    ],
    "answer": "1. Call the `yield()` function or check the `isActive` property."
  },
  {
    "id": 67,
    "title": "Q67. Given the code below, how can you write the line this.moveTo(\"LA\") more concisely?",
    "text": undefined,
    "code2": "data class Student (val name: String, var location: String) { <br> fun moveTo (newLoc: String) { location = newLoc } <br> } <br> fun main() { <br> Student (\"Snow\", \"Cologne\").run { <br> this.moveTo (\"LA\") <br> } <br> }",
    "choices": [
      "1. `moveTo(\"LA\")`",
      "2. `::moveTo(\"LA\")`",
      "3. `_.moveTo(\"LA\")`",
      "4. `it.moveTo(\"LA\")`"
    ],
    "answer": "1. `moveTo(\"LA\")`"
  },
  {
    "id": 68,
    "title": "Q68. For the Product class you are designing, you would like the price to be readable by anyone, but changeable only from within the class. Which property declaration implements your design?",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. Option 1\n```\nvar price: Int = 0\n public get()\n private set\n```",
      "2. Option 2\n```\nvar price: Int = 0\n private set\n```",
      "3. Option 3\n```\nvar price: Int = 0\n val set\n```",
      "4. Option 4\n```\nval price: Int=0\n```"
    ],
    "answer": "2. Option 2\n```\nvar price: Int = 0\n private set\n```"
  },
  {
    "id": 69,
    "title": "Q69. What will happen when you try to build and run this code snippet?",
    "text": undefined,
    "code2": "class SpecialFunction : () -> Unit { <br> override fun invoke() { <br> println(\"Invoked from an instance.\") <br> } <br> } <br> fun main() { <br> try { SpecialFunction()() } <br> catch (ex: Exception) { println(\"An error occurred\") } <br> }",
    "choices": [
      "1. A syntax error occurs due to the line `SpecialFunction()()`. ",
      "2. The message \"An Error occurred\" is displayed.",
      "3. The message \"Invoked from an instance.\" is displayed.",
      "4. A compile error occurs. You cannot override the `invoke()` method."
    ],
    "answer": "3. The message \"Invoked from an instance.\" is displayed."
  },
  {
    "id": 70,
    "title": "Q70. Which statement declares a variable mileage whose value never changes and is inferred to be an integer?",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. `val mileage:Int = 566`",
      "2. `var mileage:Int = 566`",
      "3. `val mileage = 566`",
      "4. `const int mileage = 566`"
    ],
    "answer": "3. `val mileage = 566`"
  },
  {
    "id": 71,
    "title": "Q71. What is the preferred way to create an immutable variable of type long?",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. `var longInt = 10L`",
      "2. `const long longInt = 10`",
      "3. `val longInt = 10L`",
      "4. `val longInt:Long = 10`"
    ],
    "answer": "3. `val longInt = 10L`"
  },
  {
    "id": 72,
    "title": "Q72. Which line converts the binaryStr, which contains only 0s and 1s, to an integer representing its decimal value?",
    "text": undefined,
    "code2": "val binaryStr = \"00001111\"",
    "choices": [
      "1. `val myInt = toInt(binaryStr)`",
      "2. `val myInt = binaryStr.toInt(\"0b\")`",
      "3. `val myInt = binaryStr.toInt()`",
      "4. `val myInt = binaryStr.toInt(2)`"
    ],
    "answer": "4. `val myInt = binaryStr.toInt(2)`"
  },
  {
    "id": 73,
    "title": "Q73. In a Kotlin program, which lines can be marked with a label",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. `Any program line can be marked with a label`",
      "2. `Any statement can be marked with a label`",
      "3. `Any expression can be marked with a label`",
      "4. `Only the beginning of loops can be marked with a label`"
    ],
    "answer": "3. `Any expression can be marked with a label`"
  },
  {
    "id": 74,
    "title": "Q74. All classes in Kotlin inherit from which superclass?",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. `Default`",
      "2. `Super`",
      "3. `Any`",
      "4. `Object`"
    ],
    "answer": "3. `Any`"
  },
  {
    "id": 75,
    "title": "Q75. You have written a function, sort(), that should accept only collections that implement the `Comparable` interface. How can you restrict the function?",
    "text": undefined,
    "code2": "fun sort(list: List<T>): List <T> { <br> return list.sorted() <br> }",
    "choices": [
      "1. Add `<T -> Comparable<T>>` between the `fun` keyword and the function name",
      "2. Add `Comparable<T>` between the `fun` keyword and the function name",
      "3. Add `<T : Comparable<T>>` between the `fun` keyword and the function name",
      "4. Add `<T where Comparable<T>>` between the `fun` keyword and the function name"
    ],
    "answer": "3. Add `<T : Comparable<T>>` between the `fun` keyword and the function name"
  },
  {
    "id": 76,
    "title": "Q76. Kotlin classes are final by default. What does final mean?",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. final means that you cannot use interfaces with this class.",
      "2. final means that this is the only file that can use the class.",
      "3. final means that you cannot extend the class.",
      "4. final classes cannot be used in the final section of a try/catch block."
    ],
    "answer": "3. final means that you cannot extend the class."
  },
  {
    "id": 77,
    "title": "Q77. You have created an array to hold three strings. When you run the code below, the compiler displays an error. Why does the code fail?",
    "text": undefined,
    "code2": "val names = arrayOf<String>(3) <br> names[3]= \"Delta\"",
    "choices": [
      "1. Arrays use zero-based indexes. The value 3 is outside of the array's bounds",
      "2. You accessed the element with an index but should have used.set().",
      "3. You declared the array with val but should have used var",
      "4. You cannot changes the value of an element of an array. You should have used a mutable list."
    ],
    "answer": "1. Arrays use zero-based indexes. The value 3 is outside of the array's bounds"
  },
  {
    "id": 78,
    "title": "Q78. If a class has one or more secondary constructors, what must each of them do?",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. Each secondary constructor must call super().",
      "2. Each secondary constructor must call base().",
      "3. Each secondary constructor must directly or indirectly delegate to the primary.",
      "4. Each secondary constructor must have the same name as the class."
    ],
    "answer": "3. Each secondary constructor must directly or indirectly delegate to the primary."
  },
  {
    "id": 79,
    "title": "Q79. When you can omit the constructor keyword from the primary constructor?",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. It can be omitted only if an init block is defined.",
      "2. It can be omitted anytime; it is not mandatory.",
      "3. It can be omitted if secondary constructors are defined.",
      "4. It can be omitted when the primary constructor does not have any modifiers or annotations."
    ],
    "answer": "4. It can be omitted when the primary constructor does not have any modifiers or annotations."
  },
  {
    "id": 80,
    "title": "Q80. How many different kinds of constructors are available for kotlin classes?",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. two.",
      "2. none.",
      "3. four.",
      "4. one."
    ],
    "answer": "1. two."
  },
  {
    "id": 81,
    "title": "Q81. What is the default visibility modifier in Kotlin?",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. protected",
      "2. private",
      "3. internal",
      "4. public"
    ],
    "answer": "4. public"
  },
  {
    "id": 82,
    "title": "Q82. The code below compiles and executes without issue, but is not idiomatic kotlin. What is a better way to implement the `printlln()`?",
    "text": undefined,
    "code2": "fun main() { <br> val name: String = \"Amos\" <br> val grade: Float = 95.5f <br> println(\"My name is \" + name + \". I score \" + grade + \" points on the last coding quiz.\") <br> }",
    "choices": [
      "1. Use `new printf()`. ",
      "2. Use `string.format` instead.",
      "3. Use `string append` instead.",
      "4. Use string templates instead."
    ],
    "answer": "4. Use string templates instead."
  },
  {
    "id": 83,
    "title": "Q83. You have enum class Signal that represents a state of the network connection. You want to iterate over each member of the enum. Which line of code shows how to do that `? ",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. Signal.sequence().",
      "2. Signal.toArray().",
      "3. Signal.values().",
      "4. Signal.toList(). "
    ],
    "answer": "3. Signal.values(). "
  },
  {
    "id": 84,
    "title": "Q84. You'd like to create a multiline string that includes the carriage return character. What should you use to enclose the string?",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. Double quotes(\"\").",
      "2. Single quotes('\').",
      "3. Tripple quote(\"\"\").",
      "4. Backticks(`). "
    ],
    "answer": "3. Tripple quote(\"\"\")."
  },
  {
    "id": 85,
    "title": "Q85. You want your class member to be visible to subclasses. Which modifier do you use?",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. Public.",
      "2. Protected.",
      "3. Internal.",
      "4. Private."
    ],
    "answer": "2. Protected."
  },
  {
    "id": 86,
    "title": "Q86. Which line of code shows how to create a finite sequence of the numbers 1 to 99 and then convert it into a list?",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. val lessThan99 = generateSequence(1){ if (it < 99) it + 1 else null }.toList().",
      "2. val lessThan99 = generateSequence(0){ if (it < 99)}.toList().",
      "3. val lessThan99 = generateSequence(1..9){ if (it < 99) it + 1 else null }.toList().",
      "4. val lessThan99 = listOf{1..99}.asSequence().toList()"
    ],
    "answer": "1. val lessThan99 = generateSequence(1){ if (it < 99) it + 1 else null }.toList()"
  },
  {
    "id": 87,
    "title": "Q87. What is wrong with this class definition?",
    "text": undefined,
    "code2": "class Empty",
    "choices": [
      "1. The class is properly defined, so nothing is wrong with it.",
      "2. The parentheses are missing-it should be declared as class Empty().",
      "3. Empty is a Kotlin keyword, so the code will generate an error when compiled.",
      "4. The curly braces are missing from the declaration of Empty."
    ],
    "answer": "1. The class is properly defined, so nothing is wrong with it."
  },
  {
    "id": 88,
    "title": "Q88. What is a higher-order function in Kotlin?",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. A higher-order function is a function that returns a value other than Unit.",
      "2. A higher-order function is the function that appears before others in a file.",
      "3. A higher-order function is one that can be stored in a variable.",
      "4. A higher-order function is a function that takes a function as a parameter or returns a function."
    ],
    "answer": "4. A higher-order function is a function that takes a function as a parameter or returns a function."
  },
  {
    "id": 89,
    "title": "Q89. What is Kotlin?",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. A markup language commonly used for web development.",
      "2. A general-purpose, statically typed, open-source programming language.",
      "3. A relational database management system.",
      "4. A web framework for building dynamic web applications."
    ],
    "answer": "2. A general-purpose, statically typed, open-source programming language."
  },
  {
    "id": 90,
    "title": "Q90. Who developed Kotlin?",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. Google",
      "2. Apple",
      "3. Microsoft",
      "4. JetBrains"
    ],
    "answer": "4. JetBrains"
  },

  {
    "id": 93,
    "title": "Q93. Why do some developers switch to Kotlin from Java?",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. Kotlin is more concise and cleaner.",
      "2. Kotlin offers useful features not present in Java.",
      "3. Kotlin has good support for Android development.",
      "4. Kotlin is interoperable with Java.",
      "5. All of the above"
    ],
    "answer": "5. All of the above"
  },
  {
    "id": 94,
    "title": "Q94. How does Kotlin work on Android?",
    "text": undefined,
    "code2": undefined,
    "choices": [
      "1. Kotlin code is compiled directly into machine code.",
      "2. Kotlin code is interpreted at runtime.",
      "3. Kotlin code is compiled into Java bytecode and runs on the JVM.",
      "4. Kotlin code is compiled into C++ code for Android."
    ],
    "answer": "3. Kotlin code is compiled into Java bytecode and runs on the JVM."
  },
];

let kotlinOops = [
	{
		id: 1,
		title: "Q1. What is the purpose of the `open` keyword in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It marks a class as abstract.",
			"2. It allows a class to be subclassed.",
			"3. It defines a function as a property.",
			"4. It makes a variable immutable.",
		],
		answer: "2. It allows a class to be subclassed.",
	},
	{
		id: 2,
		title: "Q2. Which of these is NOT a valid way to create an instance of a class in Kotlin?",
		text: undefined,
		code2: "class Person(val name: String) { <br> }",
		choices: [
			'1. `val person = Person("John")`',
			'2. `val person = Person(name = "John")`',
			'3. `val person = Person.new("John")`',
			'4. `val person: Person = Person("John")`',
		],
		answer: '3. `val person = Person.new("John")`',
	},
	{
		id: 3,
		title: "Q3. What is the difference between an abstract class and an interface in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. An interface can have constructor parameters, while an abstract class cannot.",
			"2. An abstract class can have non-abstract methods, while an interface can only have abstract methods.",
			"3. An interface can have only one parent, while an abstract class can have multiple parents.",
			"4. An abstract class can be instantiated directly, while an interface cannot.",
		],
		answer: "2. An abstract class can have non-abstract methods, while an interface can only have abstract methods.",
	},
	{
		id: 4,
		title: "Q4. What is the purpose of the `init` block in a Kotlin class?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It defines the class constructor.",
			"2. It initializes the class properties.",
			"3. It is used to create an instance of the class.",
			"4. It defines a static method.",
		],
		answer: "2. It initializes the class properties.",
	},
	{
		id: 5,
		title: "Q5. How do you override a method in a subclass in Kotlin?",
		text: undefined,
		code2: 'open class Animal { <br> fun makeSound() { println("Generic animal sound") } <br> } <br> class Dog : Animal() { <br> // ... <br> }',
		choices: [
			"1. Use the `override` keyword before the method declaration.",
			"2. Use the `final` keyword before the method declaration.",
			"3. Use the `abstract` keyword before the method declaration.",
			"4. Use the `static` keyword before the method declaration.",
		],
		answer: "1. Use the `override` keyword before the method declaration.",
	},
	{
		id: 6,
		title: "Q6. What is the purpose of the `companion object` in a Kotlin class?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It defines a static method for the class.",
			"2. It is used to create an instance of the class.",
			"3. It defines a constructor for the class.",
			"4. It is used to declare a private constructor.",
		],
		answer: "1. It defines a static method for the class.",
	},
	{
		id: 7,
		title: "Q7. How do you access a property of the superclass from a subclass in Kotlin?",
		text: undefined,
		code2: 'open class Shape { <br> val color: String = "Red" <br> } <br> class Circle : Shape() { <br> // ... <br> }',
		choices: [
			"1. `Shape.color`",
			"2. `super.color`",
			"3. `this.color`",
			"4. `Circle.color`",
		],
		answer: "2. `super.color`",
	},
	{
		id: 8,
		title: "Q8. What is the difference between a primary constructor and a secondary constructor in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. A primary constructor is defined in the class header, while a secondary constructor is defined in the class body.",
			"2. A primary constructor can have only one parameter, while a secondary constructor can have multiple parameters.",
			"3. A primary constructor must initialize all of the class's properties, while a secondary constructor does not have to initialize all of the class's properties.",
			"4. A primary constructor can only be called once, while a secondary constructor can be called multiple times.",
		],
		answer: "1. A primary constructor is defined in the class header, while a secondary constructor is defined in the class body.",
	},
	{
		id: 9,
		title: "Q9. What is the purpose of the `sealed` keyword in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It marks a class as abstract.",
			"2. It prevents a class from being subclassed.",
			"3. It restricts subclassing to a specific set of classes.",
			"4. It defines a class as a data class.",
		],
		answer: "3. It restricts subclassing to a specific set of classes.",
	},
	{
		id: 10,
		title: "Q10. How do you declare an abstract class in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. Using the `abstract` keyword before the class declaration.",
			"2. Using the `final` keyword before the class declaration.",
			"3. Using the `sealed` keyword before the class declaration.",
			"4. Using the `interface` keyword before the class declaration.",
		],
		answer: "1. Using the `abstract` keyword before the class declaration.",
	},
	{
		id: 11,
		title: "Q11. What is the purpose of the `data` keyword in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It defines a class that can hold only immutable data.",
			"2. It defines a class that has automatically generated equals(), hashCode(), toString(), and copy() methods.",
			"3. It defines a class that can be used as a data structure.",
			"4. It defines a class that is specifically designed for Android development.",
		],
		answer: "2. It defines a class that has automatically generated equals(), hashCode(), toString(), and copy() methods.",
	},
	{
		id: 12,
		title: "Q12. Which of these is a valid way to declare an interface in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `class Animal`",
			"2. `abstract class Animal`",
			"3. `sealed class Animal`",
			"4. `interface Animal` ",
		],
		answer: "4. `interface Animal` ",
	},
	{
		id: 13,
		title: "Q13. What is the meaning of the `override` keyword in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It defines a method as a property.",
			"2. It makes a variable immutable.",
			"3. It indicates that a method is overriding a method from a superclass.",
			"4. It defines a constructor for a class.",
		],
		answer: "3. It indicates that a method is overriding a method from a superclass.",
	},
	{
		id: 14,
		title: "Q14. What is the difference between a `val` and a `var` property in a Kotlin class?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. A `val` property is immutable, while a `var` property is mutable.",
			"2. A `val` property can be initialized later, while a `var` property must be initialized immediately.",
			"3. A `val` property can be accessed from any part of the code, while a `var` property can only be accessed from within the class.",
			"4. There is no difference; `val` and `var` are interchangeable.",
		],
		answer: "1. A `val` property is immutable, while a `var` property is mutable.",
	},
	{
		id: 15,
		title: "Q15. Which of the following is a valid way to declare a property in a Kotlin class?",
		text: undefined,
		code2: "class Person { <br> // ... <br> }",
		choices: [
			'1. `val name: String = "John"`',
			'2. `private val name: String = "John"`',
			'3. `var name: String = "John"`',
			"4. All of the above",
		],
		answer: "4. All of the above",
	},
	{
		id: 16,
		title: "Q16. What is the purpose of the `super` keyword in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It creates an instance of a class.",
			"2. It defines a constructor for a class.",
			"3. It calls a method or accesses a property of the superclass.",
			"4. It declares a variable as immutable.",
		],
		answer: "3. It calls a method or accesses a property of the superclass.",
	},
	{
		id: 17,
		title: "Q17.  What is the purpose of the `companion object` in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To define static methods and properties for a class.",
			"2. To provide a way to create an instance of a class.",
			"3. To define a constructor for a class.",
			"4. To declare a private constructor for a class.",
		],
		answer: "1. To define static methods and properties for a class.",
	},
	{
		id: 18,
		title: "Q18. How do you create an interface in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `class MyInterface`",
			"2. `abstract class MyInterface`",
			"3. `sealed class MyInterface`",
			"4. `interface MyInterface` ",
		],
		answer: "4. `interface MyInterface` ",
	},
	{
		id: 19,
		title: "Q19. What is the role of `abstract` methods in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. They are methods that are not implemented in the class.",
			"2. They are methods that are called only once.",
			"3. They are methods that are private to the class.",
			"4. They are methods that are only used in interfaces.",
		],
		answer: "1. They are methods that are not implemented in the class.",
	},
	{
		id: 20,
		title: "Q20. What is the main purpose of a data class in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To define a class that can be used as a data structure.",
			"2. To provide a class with automatically generated methods for data manipulation.",
			"3. To create instances of other classes.",
			"4. To define a class that has static methods.",
		],
		answer: "2. To provide a class with automatically generated methods for data manipulation.",
	},
	{
		id: 21,
		title: "Q21.  How do you define a property that can only be changed within the class itself (private setter) in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			'1. `var name: String = "John"`',
			'2. `val name: String = "John"`',
			'3. `private val name: String = "John"`',
			'4. `var name: String = "John" private set` ',
		],
		answer: '4. `var name: String = "John" private set` ',
	},
	{
		id: 22,
		title: "Q22. How do you override a property in Kotlin?",
		text: undefined,
		code2: "open class Animal { <br> var age: Int = 0 <br> } <br> class Dog : Animal() { <br> // ... <br> }",
		choices: [
			"1. Using the `override` keyword before the property declaration.",
			"2. Using the `final` keyword before the property declaration.",
			"3. Using the `abstract` keyword before the property declaration.",
			"4. Using the `static` keyword before the property declaration.",
		],
		answer: "1. Using the `override` keyword before the property declaration.",
	},
	{
		id: 23,
		title: "Q23. What is the purpose of the `lateinit` keyword in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It makes a variable immutable.",
			"2. It initializes a property at compile time.",
			"3. It allows a non-null property to be initialized later.",
			"4. It declares a property as a static property.",
		],
		answer: "3. It allows a non-null property to be initialized later.",
	},
	{
		id: 24,
		title: "Q24. What is the difference between `const` and `val` in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `const` is used for compile-time constants, while `val` is used for runtime constants.",
			"2. `const` can be used with any data type, while `val` can only be used with primitive data types.",
			"3. `const` is used for mutable variables, while `val` is used for immutable variables.",
			"4. `const` and `val` are interchangeable; there is no difference.",
		],
		answer: "1. `const` is used for compile-time constants, while `val` is used for runtime constants.",
	},
	{
		id: 25,
		title: "Q25. What is a valid way to access a method of a class object in Kotlin?",
		text: undefined,
		code2: 'class Car(val model: String) { <br> fun startEngine() { <br> println("Engine started.") <br> } <br> }',
		choices: [
			"1. `Car.startEngine()`",
			'2. `val car = Car("Tesla"); car.startEngine()`',
			'3. `Car("Tesla").startEngine()`',
			"4. Both 2 and 3",
		],
		answer: "4. Both 2 and 3",
	},
	{
		id: 26,
		title: "Q26. What is the purpose of the `sealed` keyword in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It marks a class as abstract.",
			"2. It prevents a class from being subclassed.",
			"3. It restricts subclassing to a specific set of classes.",
			"4. It defines a class as a data class.",
		],
		answer: "3. It restricts subclassing to a specific set of classes.",
	},
	{
		id: 27,
		title: "Q27. What is the `is` operator used for in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To assign a value to a variable.",
			"2. To check if two objects are equal.",
			"3. To check if an object is of a specific type.",
			"4. To perform a safe cast operation.",
		],
		answer: "3. To check if an object is of a specific type.",
	},
	{
		id: 28,
		title: "Q28. What is the difference between `as` and `as?` in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `as` performs a safe cast, while `as?` throws an exception if the cast fails.",
			"2. `as?` performs a safe cast, while `as` throws an exception if the cast fails.",
			"3. `as` and `as?` are equivalent; there is no difference.",
			"4. `as` is used for type checking, while `as?` is used for type casting.",
		],
		answer: "2. `as?` performs a safe cast, while `as` throws an exception if the cast fails.",
	},
	{
		id: 29,
		title: "Q29. What is the purpose of `object` declarations in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To create a class with a single instance.",
			"2. To define a static method for a class.",
			"3. To declare an abstract class.",
			"4. To define a data class.",
		],
		answer: "1. To create a class with a single instance.",
	},
	{
		id: 30,
		title: "Q30. What is the difference between `interface` and `abstract class` in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `interface` can have constructor parameters, while `abstract class` cannot.",
			"2. `abstract class` can have non-abstract methods, while `interface` can only have abstract methods.",
			"3. `interface` can have only one parent, while `abstract class` can have multiple parents.",
			"4. `abstract class` can be instantiated directly, while `interface` cannot.",
		],
		answer: "2. `abstract class` can have non-abstract methods, while `interface` can only have abstract methods.",
	},
	{
		id: 31,
		title: "Q31. What is the `override` keyword used for in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To declare a variable as mutable.",
			"2. To mark a function or property as overriding a function or property from a superclass.",
			"3. To define a constructor for a class.",
			"4. To indicate that a method is abstract.",
		],
		answer: "2. To mark a function or property as overriding a function or property from a superclass.",
	},
	{
		id: 32,
		title: "Q32. What is the difference between a `val` and a `var` property in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `val` is immutable, `var` is mutable.",
			"2. `val` must be initialized immediately, `var` can be initialized later.",
			"3. `val` can be accessed from anywhere, `var` can only be accessed within the class.",
			"4. There is no difference; they are interchangeable.",
		],
		answer: "1. `val` is immutable, `var` is mutable.",
	},
	{
		id: 33,
		title: "Q33. What is the purpose of the `sealed` keyword in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It marks a class as abstract.",
			"2. It restricts subclassing to a specific set of classes.",
			"3. It prevents a class from being subclassed.",
			"4. It defines a class as a data class.",
		],
		answer: "2. It restricts subclassing to a specific set of classes.",
	},
	{
		id: 34,
		title: "Q34. What is the `super` keyword used for in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To create an instance of a class.",
			"2. To define a constructor for a class.",
			"3. To call a method or access a property of the superclass.",
			"4. To declare a variable as immutable.",
		],
		answer: "3. To call a method or access a property of the superclass.",
	},
	{
		id: 35,
		title: "Q35. Which of the following is a valid way to declare a property in a Kotlin class?",
		text: undefined,
		code2: "class Person { <br> // ... <br> }",
		choices: [
			'1. `val name: String = "John"`',
			'2. `private val name: String = "John"`',
			'3. `var name: String = "John"`',
			"4. All of the above",
		],
		answer: "4. All of the above",
	},
	{
		id: 36,
		title: "Q36. What is a secondary constructor in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. A constructor that is called only once.",
			"2. A constructor that is defined outside the class body.",
			"3. A constructor that is used to define static properties.",
			"4. A constructor that is defined within the class body and delegates to the primary constructor.",
		],
		answer: "4. A constructor that is defined within the class body and delegates to the primary constructor.",
	},
	{
		id: 37,
		title: "Q37. How do you define a companion object in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `companion object MyCompanion`",
			"2. `static object MyCompanion`",
			"3. `object MyCompanion`",
			"4. `companion class MyCompanion` ",
		],
		answer: "1. `companion object MyCompanion` ",
	},
	{
		id: 38,
		title: "Q38. What is the purpose of the `init` block in a Kotlin class?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To define the class constructor.",
			"2. To initialize the class properties.",
			"3. To create an instance of the class.",
			"4. To define a static method.",
		],
		answer: "2. To initialize the class properties.",
	},
	{
		id: 39,
		title: "Q39. What is the difference between an abstract class and an interface in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. An interface can have constructor parameters, while an abstract class cannot.",
			"2. An abstract class can have non-abstract methods, while an interface can only have abstract methods.",
			"3. An interface can have only one parent, while an abstract class can have multiple parents.",
			"4. An abstract class can be instantiated directly, while an interface cannot.",
		],
		answer: "2. An abstract class can have non-abstract methods, while an interface can only have abstract methods.",
	},
	{
		id: 40,
		title: "Q40. Which of these is NOT a valid way to create an instance of a class in Kotlin?",
		text: undefined,
		code2: "class Person(val name: String) { <br> }",
		choices: [
			'1. `val person = Person("John")`',
			'2. `val person = Person(name = "John")`',
			'3. `val person = Person.new("John")`',
			'4. `val person: Person = Person("John")`',
		],
		answer: '3. `val person = Person.new("John")`',
	},
	{
		id: 41,
		title: "Q41. What is the purpose of the `open` keyword in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It marks a class as abstract.",
			"2. It allows a class to be subclassed.",
			"3. It defines a function as a property.",
			"4. It makes a variable immutable.",
		],
		answer: "2. It allows a class to be subclassed.",
	},
	{
		id: 42,
		title: "Q42. What is the difference between `as` and `as?` in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `as` performs a safe cast, while `as?` throws an exception if the cast fails.",
			"2. `as?` performs a safe cast, while `as` throws an exception if the cast fails.",
			"3. `as` and `as?` are equivalent; there is no difference.",
			"4. `as` is used for type checking, while `as?` is used for type casting.",
		],
		answer: "2. `as?` performs a safe cast, while `as` throws an exception if the cast fails.",
	},
	{
		id: 43,
		title: "Q43. What is the difference between a primary constructor and a secondary constructor in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. A primary constructor is defined in the class header, while a secondary constructor is defined in the class body.",
			"2. A primary constructor can have only one parameter, while a secondary constructor can have multiple parameters.",
			"3. A primary constructor must initialize all of the class's properties, while a secondary constructor does not have to initialize all of the class's properties.",
			"4. A primary constructor can only be called once, while a secondary constructor can be called multiple times.",
		],
		answer: "1. A primary constructor is defined in the class header, while a secondary constructor is defined in the class body.",
	},
	{
		id: 44,
		title: "Q44. How do you create an interface in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `class MyInterface`",
			"2. `abstract class MyInterface`",
			"3. `sealed class MyInterface`",
			"4. `interface MyInterface` ",
		],
		answer: "4. `interface MyInterface` ",
	},
	{
		id: 45,
		title: "Q45. What is the main purpose of a data class in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To define a class that can be used as a data structure.",
			"2. To provide a class with automatically generated methods for data manipulation.",
			"3. To create instances of other classes.",
			"4. To define a class that has static methods.",
		],
		answer: "2. To provide a class with automatically generated methods for data manipulation.",
	},
	{
		id: 46,
		title: "Q46. What is the meaning of the `override` keyword in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It defines a method as a property.",
			"2. It makes a variable immutable.",
			"3. It indicates that a method is overriding a method from a superclass.",
			"4. It defines a constructor for a class.",
		],
		answer: "3. It indicates that a method is overriding a method from a superclass.",
	},
	{
		id: 47,
		title: "Q47. How do you override a property in Kotlin?",
		text: undefined,
		code2: "open class Animal { <br> var age: Int = 0 <br> } <br> class Dog : Animal() { <br> // ... <br> }",
		choices: [
			"1. Using the `override` keyword before the property declaration.",
			"2. Using the `final` keyword before the property declaration.",
			"3. Using the `abstract` keyword before the property declaration.",
			"4. Using the `static` keyword before the property declaration.",
		],
		answer: "1. Using the `override` keyword before the property declaration.",
	},
	{
		id: 48,
		title: "Q48. What is the purpose of the `lateinit` keyword in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It makes a variable immutable.",
			"2. It initializes a property at compile time.",
			"3. It allows a non-null property to be initialized later.",
			"4. It declares a property as a static property.",
		],
		answer: "3. It allows a non-null property to be initialized later.",
	},
	{
		id: 49,
		title: "Q49. What is the difference between `const` and `val` in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `const` is used for compile-time constants, while `val` is used for runtime constants.",
			"2. `const` can be used with any data type, while `val` can only be used with primitive data types.",
			"3. `const` is used for mutable variables, while `val` is used for immutable variables.",
			"4. `const` and `val` are interchangeable; there is no difference.",
		],
		answer: "1. `const` is used for compile-time constants, while `val` is used for runtime constants.",
	},
	{
		id: 50,
		title: "Q50. What is a valid way to access a method of a class object in Kotlin?",
		text: undefined,
		code2: 'class Car(val model: String) { <br> fun startEngine() { <br> println("Engine started.") <br> } <br> }',
		choices: [
			"1. `Car.startEngine()`",
			'2. `val car = Car("Tesla"); car.startEngine()`',
			'3. `Car("Tesla").startEngine()`',
			"4. Both 2 and 3",
		],
		answer: "4. Both 2 and 3",
	},
	{
		id: 51,
		title: "Q51. What is the purpose of the `sealed` keyword in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It marks a class as abstract.",
			"2. It prevents a class from being subclassed.",
			"3. It restricts subclassing to a specific set of classes.",
			"4. It defines a class as a data class.",
		],
		answer: "3. It restricts subclassing to a specific set of classes.",
	},
	{
		id: 52,
		title: "Q52. What is the `is` operator used for in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To assign a value to a variable.",
			"2. To check if two objects are equal.",
			"3. To check if an object is of a specific type.",
			"4. To perform a safe cast operation.",
		],
		answer: "3. To check if an object is of a specific type.",
	},
	{
		id: 53,
		title: "Q53.  How do you define a property that can only be changed within the class itself (private setter) in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			'1. `var name: String = "John"`',
			'2. `val name: String = "John"`',
			'3. `private val name: String = "John"`',
			'4. `var name: String = "John" private set` ',
		],
		answer: '4. `var name: String = "John" private set` ',
	},

	{
		id: 55,
		title: "Q55. How do you declare a class as final in Kotlin, preventing it from being subclassed?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `final class MyClass`",
			"2. `sealed class MyClass`",
			"3. `private class MyClass`",
			"4. `abstract class MyClass` ",
		],
		answer: "1. `final class MyClass`",
	},
	{
		id: 56,
		title: "Q56. What is the difference between using `interface` and `abstract class` in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `interface` can only have abstract methods, while `abstract class` can have both abstract and non-abstract methods.",
			"2. `interface` can have properties with implementations, while `abstract class` can only have abstract properties.",
			"3. `interface` can be instantiated directly, while `abstract class` cannot.",
			"4. `interface` can only inherit from one parent, while `abstract class` can inherit from multiple parents.",
		],
		answer: "1. `interface` can only have abstract methods, while `abstract class` can have both abstract and non-abstract methods.",
	},
	{
		id: 57,
		title: "Q57.  What is the main purpose of a `data class` in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To define a class that can be used as a data structure.",
			"2. To provide a class with automatically generated methods for data manipulation.",
			"3. To create instances of other classes.",
			"4. To define a class that has static methods.",
		],
		answer: "2. To provide a class with automatically generated methods for data manipulation.",
	},
	{
		id: 58,
		title: "Q58.  Which keyword in Kotlin is used to define a property that can only be accessed within the class itself (private access modifier)?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `public`",
			"2. `protected`",
			"3. `internal`",
			"4. `private` ",
		],
		answer: "4. `private` ",
	},
	{
		id: 59,
		title: "Q59. How do you declare a property in a Kotlin class that can be accessed from any subclass?",
		text: undefined,
		code2: undefined,
		choices: [
			'1. `private val name: String = "John"`',
			'2. `protected val name: String = "John"`',
			'3. `internal val name: String = "John"`',
			'4. `public val name: String = "John"` ',
		],
		answer: '2. `protected val name: String = "John"`',
	},
	{
		id: 60,
		title: "Q60. What is the purpose of the `super` keyword in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To create an instance of a class.",
			"2. To define a constructor for a class.",
			"3. To call a method or access a property of the superclass.",
			"4. To declare a variable as immutable.",
		],
		answer: "3. To call a method or access a property of the superclass.",
	},
	{
		id: 61,
		title: "Q61.  What is the difference between a `val` and a `var` property in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `val` is immutable, `var` is mutable.",
			"2. `val` must be initialized immediately, `var` can be initialized later.",
			"3. `val` can be accessed from anywhere, `var` can only be accessed within the class.",
			"4. There is no difference; they are interchangeable.",
		],
		answer: "1. `val` is immutable, `var` is mutable.",
	},
	{
		id: 62,
		title: "Q62. What is the role of `abstract` methods in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. They are methods that are not implemented in the class.",
			"2. They are methods that are called only once.",
			"3. They are methods that are private to the class.",
			"4. They are methods that are only used in interfaces.",
		],
		answer: "1. They are methods that are not implemented in the class.",
	},
	{
		id: 63,
		title: "Q63. What is the purpose of the `init` block in a Kotlin class?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It defines the class constructor.",
			"2. It initializes the class properties.",
			"3. It is used to create an instance of the class.",
			"4. It defines a static method.",
		],
		answer: "2. It initializes the class properties.",
	},
	{
		id: 64,
		title: "Q64. How do you override a method in a subclass in Kotlin?",
		text: undefined,
		code2: 'open class Animal { <br> fun makeSound() { println("Generic animal sound") } <br> } <br> class Dog : Animal() { <br> // ... <br> }',
		choices: [
			"1. Use the `override` keyword before the method declaration.",
			"2. Use the `final` keyword before the method declaration.",
			"3. Use the `abstract` keyword before the method declaration.",
			"4. Use the `static` keyword before the method declaration.",
		],
		answer: "1. Use the `override` keyword before the method declaration.",
	},
	{
		id: 65,
		title: "Q65. What is the difference between using `interface` and `abstract class` in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `interface` can only have abstract methods, while `abstract class` can have both abstract and non-abstract methods.",
			"2. `interface` can have properties with implementations, while `abstract class` can only have abstract properties.",
			"3. `interface` can be instantiated directly, while `abstract class` cannot.",
			"4. `interface` can only inherit from one parent, while `abstract class` can inherit from multiple parents.",
		],
		answer: "1. `interface` can only have abstract methods, while `abstract class` can have both abstract and non-abstract methods.",
	},
	{
		id: 66,
		title: "Q66. Which of these is NOT a valid way to create an instance of a class in Kotlin?",
		text: undefined,
		code2: "class Person(val name: String) { <br> }",
		choices: [
			'1. `val person = Person("John")`',
			'2. `val person = Person(name = "John")`',
			'3. `val person = Person.new("John")`',
			'4. `val person: Person = Person("John")`',
		],
		answer: '3. `val person = Person.new("John")`',
	},
	{
		id: 67,
		title: "Q67. How do you define a companion object in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `companion object MyCompanion`",
			"2. `static object MyCompanion`",
			"3. `object MyCompanion`",
			"4. `companion class MyCompanion` ",
		],
		answer: "1. `companion object MyCompanion` ",
	},
	{
		id: 68,
		title: "Q68. What is the purpose of the `init` block in a Kotlin class?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It defines the class constructor.",
			"2. It initializes the class properties.",
			"3. It is used to create an instance of the class.",
			"4. It defines a static method.",
		],
		answer: "2. It initializes the class properties.",
	},
	{
		id: 69,
		title: "Q69. How do you access a property of the superclass from a subclass in Kotlin?",
		text: undefined,
		code2: 'open class Shape { <br> val color: String = "Red" <br> } <br> class Circle : Shape() { <br> // ... <br> }',
		choices: [
			"1. `Shape.color`",
			"2. `super.color`",
			"3. `this.color`",
			"4. `Circle.color`",
		],
		answer: "2. `super.color`",
	},
	{
		id: 70,
		title: "Q70. What is the difference between an abstract class and an interface in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. An interface can have constructor parameters, while an abstract class cannot.",
			"2. An abstract class can have non-abstract methods, while an interface can only have abstract methods.",
			"3. An interface can have only one parent, while an abstract class can have multiple parents.",
			"4. An abstract class can be instantiated directly, while an interface cannot.",
		],
		answer: "2. An abstract class can have non-abstract methods, while an interface can only have abstract methods.",
	},
	{
		id: 71,
		title: "Q71. How do you declare an abstract class in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. Using the `abstract` keyword before the class declaration.",
			"2. Using the `final` keyword before the class declaration.",
			"3. Using the `sealed` keyword before the class declaration.",
			"4. Using the `interface` keyword before the class declaration.",
		],
		answer: "1. Using the `abstract` keyword before the class declaration.",
	},
	{
		id: 72,
		title: "Q72. What is the purpose of the `data` keyword in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It defines a class that can hold only immutable data.",
			"2. It defines a class that has automatically generated equals(), hashCode(), toString(), and copy() methods.",
			"3. It defines a class that can be used as a data structure.",
			"4. It defines a class that is specifically designed for Android development.",
		],
		answer: "2. It defines a class that has automatically generated equals(), hashCode(), toString(), and copy() methods.",
	},
	{
		id: 73,
		title: "Q73. Which of these is a valid way to declare an interface in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `class Animal`",
			"2. `abstract class Animal`",
			"3. `sealed class Animal`",
			"4. `interface Animal` ",
		],
		answer: "4. `interface Animal` ",
	},
	{
		id: 74,
		title: "Q74. What is the meaning of the `override` keyword in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It defines a method as a property.",
			"2. It makes a variable immutable.",
			"3. It indicates that a method is overriding a method from a superclass.",
			"4. It defines a constructor for a class.",
		],
		answer: "3. It indicates that a method is overriding a method from a superclass.",
	},
	{
		id: 75,
		title: "Q75. What is the difference between a `val` and a `var` property in a Kotlin class?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. A `val` property is immutable, while a `var` property is mutable.",
			"2. A `val` property can be initialized later, while a `var` property must be initialized immediately.",
			"3. A `val` property can be accessed from any part of the code, while a `var` property can only be accessed from within the class.",
			"4. There is no difference; `val` and `var` are interchangeable.",
		],
		answer: "1. A `val` property is immutable, while a `var` property is mutable.",
	},
	{
		id: 76,
		title: "Q76. Which of the following is a valid way to declare a property in a Kotlin class?",
		text: undefined,
		code2: "class Person { <br> // ... <br> }",
		choices: [
			'1. `val name: String = "John"`',
			'2. `private val name: String = "John"`',
			'3. `var name: String = "John"`',
			"4. All of the above",
		],
		answer: "4. All of the above",
	},
	{
		id: 77,
		title: "Q77. What is the purpose of the `super` keyword in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It creates an instance of a class.",
			"2. It defines a constructor for a class.",
			"3. It calls a method or accesses a property of the superclass.",
			"4. It declares a variable as immutable.",
		],
		answer: "3. It calls a method or accesses a property of the superclass.",
	},
	{
		id: 78,
		title: "Q78. What is the purpose of the `init` block in a Kotlin class?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It defines the class constructor.",
			"2. It initializes the class properties.",
			"3. It is used to create an instance of the class.",
			"4. It defines a static method.",
		],
		answer: "2. It initializes the class properties.",
	},
	{
		id: 79,
		title: "Q79. How do you override a method in a subclass in Kotlin?",
		text: undefined,
		code2: 'open class Animal { <br> fun makeSound() { println("Generic animal sound") } <br> } <br> class Dog : Animal() { <br> // ... <br> }',
		choices: [
			"1. Use the `override` keyword before the method declaration.",
			"2. Use the `final` keyword before the method declaration.",
			"3. Use the `abstract` keyword before the method declaration.",
			"4. Use the `static` keyword before the method declaration.",
		],
		answer: "1. Use the `override` keyword before the method declaration.",
	},
	{
		id: 80,
		title: "Q80.  What is the difference between a `val` and a `var` property in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. A `val` property is immutable, while a `var` property is mutable.",
			"2. A `val` property can be initialized later, while a `var` property must be initialized immediately.",
			"3. A `val` property can be accessed from any part of the code, while a `var` property can only be accessed from within the class.",
			"4. There is no difference; `val` and `var` are interchangeable.",
		],
		answer: "1. A `val` property is immutable, while a `var` property is mutable.",
	},
	{
		id: 81,
		title: "Q81.  Which of the following is a valid way to declare a property in a Kotlin class?",
		text: undefined,
		code2: "class Person { <br> // ... <br> }",
		choices: [
			'1. `val name: String = "John"`',
			'2. `private val name: String = "John"`',
			'3. `var name: String = "John"`',
			"4. All of the above",
		],
		answer: "4. All of the above",
	},
	{
		id: 82,
		title: "Q82. What is the purpose of the `super` keyword in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It creates an instance of a class.",
			"2. It defines a constructor for a class.",
			"3. It calls a method or accesses a property of the superclass.",
			"4. It declares a variable as immutable.",
		],
		answer: "3. It calls a method or accesses a property of the superclass.",
	},
	{
		id: 83,
		title: "Q83.  How do you define a property that can only be changed within the class itself (private setter) in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			'1. `var name: String = "John"`',
			'2. `val name: String = "John"`',
			'3. `private val name: String = "John"`',
			'4. `var name: String = "John" private set` ',
		],
		answer: '4. `var name: String = "John" private set` ',
	},
	{
		id: 84,
		title: "Q84. What is the purpose of the `init` block in a Kotlin class?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It defines the class constructor.",
			"2. It initializes the class properties.",
			"3. It is used to create an instance of the class.",
			"4. It defines a static method.",
		],
		answer: "2. It initializes the class properties.",
	},
	{
		id: 85,
		title: "Q85. How do you override a method in a subclass in Kotlin?",
		text: undefined,
		code2: 'open class Animal { <br> fun makeSound() { println("Generic animal sound") } <br> } <br> class Dog : Animal() { <br> // ... <br> }',
		choices: [
			"1. Use the `override` keyword before the method declaration.",
			"2. Use the `final` keyword before the method declaration.",
			"3. Use the `abstract` keyword before the method declaration.",
			"4. Use the `static` keyword before the method declaration.",
		],
		answer: "1. Use the `override` keyword before the method declaration.",
	},
	{
		id: 86,
		title: "Q86.  What is the purpose of the `sealed` keyword in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It marks a class as abstract.",
			"2. It prevents a class from being subclassed.",
			"3. It restricts subclassing to a specific set of classes.",
			"4. It defines a class as a data class.",
		],
		answer: "3. It restricts subclassing to a specific set of classes.",
	},
	{
		id: 87,
		title: "Q87.  What is the difference between a `val` and a `var` property in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. A `val` property is immutable, while a `var` property is mutable.",
			"2. A `val` property can be initialized later, while a `var` property must be initialized immediately.",
			"3. A `val` property can be accessed from any part of the code, while a `var` property can only be accessed from within the class.",
			"4. There is no difference; `val` and `var` are interchangeable.",
		],
		answer: "1. A `val` property is immutable, while a `var` property is mutable.",
	},
	{
		id: 88,
		title: "Q88. What is the difference between using `interface` and `abstract class` in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `interface` can only have abstract methods, while `abstract class` can have both abstract and non-abstract methods.",
			"2. `interface` can have properties with implementations, while `abstract class` can only have abstract properties.",
			"3. `interface` can be instantiated directly, while `abstract class` cannot.",
			"4. `interface` can only inherit from one parent, while `abstract class` can inherit from multiple parents.",
		],
		answer: "1. `interface` can only have abstract methods, while `abstract class` can have both abstract and non-abstract methods.",
	},
	{
		id: 89,
		title: "Q89. Which of these is NOT a valid way to create an instance of a class in Kotlin?",
		text: undefined,
		code2: "class Person(val name: String) { <br> }",
		choices: [
			'1. `val person = Person("John")`',
			'2. `val person = Person(name = "John")`',
			'3. `val person = Person.new("John")`',
			'4. `val person: Person = Person("John")`',
		],
		answer: '3. `val person = Person.new("John")`',
	},
	{
		id: 90,
		title: "Q90.  How do you define a companion object in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `companion object MyCompanion`",
			"2. `static object MyCompanion`",
			"3. `object MyCompanion`",
			"4. `companion class MyCompanion` ",
		],
		answer: "1. `companion object MyCompanion` ",
	},
	{
		id: 91,
		title: "Q91. What is the purpose of the `init` block in a Kotlin class?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It defines the class constructor.",
			"2. It initializes the class properties.",
			"3. It is used to create an instance of the class.",
			"4. It defines a static method.",
		],
		answer: "2. It initializes the class properties.",
	},
	{
		id: 92,
		title: "Q92. How do you access a property of the superclass from a subclass in Kotlin?",
		text: undefined,
		code2: 'open class Shape { <br> val color: String = "Red" <br> } <br> class Circle : Shape() { <br> // ... <br> }',
		choices: [
			"1. `Shape.color`",
			"2. `super.color`",
			"3. `this.color`",
			"4. `Circle.color`",
		],
		answer: "2. `super.color`",
	},
	{
		id: 93,
		title: "Q93. How do you override a property in Kotlin?",
		text: undefined,
		code2: "open class Animal { <br> var age: Int = 0 <br> } <br> class Dog : Animal() { <br> // ... <br> }",
		choices: [
			"1. Using the `override` keyword before the property declaration.",
			"2. Using the `final` keyword before the property declaration.",
			"3. Using the `abstract` keyword before the property declaration.",
			"4. Using the `static` keyword before the property declaration.",
		],
		answer: "1. Using the `override` keyword before the property declaration.",
	},
	{
		id: 94,
		title: "Q94. What is the purpose of the `lateinit` keyword in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It makes a variable immutable.",
			"2. It initializes a property at compile time.",
			"3. It allows a non-null property to be initialized later.",
			"4. It declares a property as a static property.",
		],
		answer: "3. It allows a non-null property to be initialized later.",
	},
	{
		id: 95,
		title: "Q95. What is the difference between `const` and `val` in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `const` is used for compile-time constants, while `val` is used for runtime constants.",
			"2. `const` can be used with any data type, while `val` can only be used with primitive data types.",
			"3. `const` is used for mutable variables, while `val` is used for immutable variables.",
			"4. `const` and `val` are interchangeable; there is no difference.",
		],
		answer: "1. `const` is used for compile-time constants, while `val` is used for runtime constants.",
	},
	{
		id: 96,
		title: "Q96. What is a valid way to access a method of a class object in Kotlin?",
		text: undefined,
		code2: 'class Car(val model: String) { <br> fun startEngine() { <br> println("Engine started.") <br> } <br> }',
		choices: [
			"1. `Car.startEngine()`",
			'2. `val car = Car("Tesla"); car.startEngine()`',
			'3. `Car("Tesla").startEngine()`',
			"4. Both 2 and 3",
		],
		answer: "4. Both 2 and 3",
	},
	{
		id: 97,
		title: "Q97. What is the purpose of the `sealed` keyword in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It marks a class as abstract.",
			"2. It prevents a class from being subclassed.",
			"3. It restricts subclassing to a specific set of classes.",
			"4. It defines a class as a data class.",
		],
		answer: "3. It restricts subclassing to a specific set of classes.",
	},
	{
		id: 98,
		title: "Q98. What is the `is` operator used for in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To assign a value to a variable.",
			"2. To check if two objects are equal.",
			"3. To check if an object is of a specific type.",
			"4. To perform a safe cast operation.",
		],
		answer: "3. To check if an object is of a specific type.",
	},
	{
		id: 99,
		title: "Q99.  How do you define a property that can only be changed within the class itself (private setter) in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			'1. `var name: String = "John"`',
			'2. `val name: String = "John"`',
			'3. `private val name: String = "John"`',
			'4. `var name: String = "John" private set` ',
		],
		answer: '4. `var name: String = "John" private set` ',
	},
	{
		id: 100,
		title: "Q100. What is the purpose of the `init` block in a Kotlin class?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It defines the class constructor.",
			"2. It initializes the class properties.",
			"3. It is used to create an instance of the class.",
			"4. It defines a static method.",
		],
		answer: "2. It initializes the class properties.",
	},
];

let jetpackCompose = [
	{
		id: 4,
		title: "Q4. How do you create a simple `Text` composable in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `TextView text = new TextView(context)`",
			'2. `val text = Text("Hello, world!")`',
			'3. `Text.setText("Hello, world!")`',
			'4. `val text = TextView("Hello, world!")`',
		],
		answer: '2. `val text = Text("Hello, world!")`',
	},
	{
		id: 5,
		title: "Q5. What is the purpose of the `@Composable` annotation in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It marks a function as a view.",
			"2. It marks a function as a layout.",
			"3. It marks a function as a composable function.",
			"4. It marks a function as a state-holding function.",
		],
		answer: "3. It marks a function as a composable function.",
	},
	{
		id: 6,
		title: "Q6. What is the role of `Modifier` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To define the layout parameters of a composable.",
			"2. To manage the state of a composable.",
			"3. To handle user interactions with a composable.",
			"4. To define the theme of a composable.",
		],
		answer: "1. To define the layout parameters of a composable.",
	},
	{
		id: 7,
		title: "Q7. How do you add a `padding` to a composable in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			'1. `Text("Hello", padding = 16.dp)`',
			'2. `Text("Hello").setPadding(16.dp)`',
			'3. `Text("Hello", Modifier.padding(16.dp))`',
			'4. `Text("Hello").apply { padding = 16.dp }`',
		],
		answer: '3. `Text("Hello", Modifier.padding(16.dp))`',
	},
	{
		id: 8,
		title: "Q8. How do you create a simple `Column` layout in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			'1. `Column { <br> Text("Item 1") <br> Text("Item 2") <br> }`',
			'2. `LinearLayout.vertical { <br> Text("Item 1") <br> Text("Item 2") <br> }`',
			'3. `val column = Column() <br> column.addView(Text("Item 1")) <br> column.addView(Text("Item 2"))`',
			'4. `val column = Column(Text("Item 1"), Text("Item 2"))`',
		],
		answer: '1. `Column { <br> Text("Item 1") <br> Text("Item 2") <br> }`',
	},
	{
		id: 9,
		title: "Q9. How do you create a simple `Row` layout in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			'1. `Row { <br> Text("Item 1") <br> Text("Item 2") <br> }`',
			'2. `LinearLayout.horizontal { <br> Text("Item 1") <br> Text("Item 2") <br> }`',
			'3. `val row = Row() <br> row.addView(Text("Item 1")) <br> row.addView(Text("Item 2"))`',
			'4. `val row = Row(Text("Item 1"), Text("Item 2"))`',
		],
		answer: '1. `Row { <br> Text("Item 1") <br> Text("Item 2") <br> }`',
	},
	{
		id: 10,
		title: "Q10. What is the purpose of the `remember` function in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To create a new instance of a composable.",
			"2. To store a value in memory so it can be reused.",
			"3. To define a state variable.",
			"4. To handle user interactions.",
		],
		answer: "2. To store a value in memory so it can be reused.",
	},
	{
		id: 11,
		title: "Q11. How do you define a state variable in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `var count = 0`",
			"2. `val count = mutableStateOf(0)`",
			"3. `val count = remember { 0 }`",
			"4. `val count = state { 0 }`",
		],
		answer: "4. `val count = state { 0 }`",
	},
	{
		id: 12,
		title: "Q12. How do you update a state variable in Jetpack Compose?",
		text: undefined,
		code2: "val count = state { 0 }",
		choices: [
			"1. `count = count + 1`",
			"2. `count.value = count.value + 1`",
			"3. `count.plusAssign(1)`",
			"4. `count.update { it + 1 }`",
		],
		answer: "4. `count.update { it + 1 }`",
	},
	{
		id: 13,
		title: "Q13. How do you create a simple button in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `Button { <br> // Action <br> }`",
			"2. `val button = Button() <br> button.setOnClickListener { <br> // Action <br> }`",
			"3. `Button.onClick { <br> // Action <br> }`",
			"4. `val button = Button(onClick = { <br> // Action <br> })`",
		],
		answer: "1. `Button { <br> // Action <br> }`",
	},
	{
		id: 14,
		title: "Q14. How do you create a simple `LazyColumn` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `LazyColumn { <br> items(items) { item -> <br> // Composable for item <br> } <br> }`",
			"2. `RecyclerView.lazy { <br> items(items) { item -> <br> // View for item <br> } <br> }`",
			"3. `val lazyColumn = LazyColumn() <br> lazyColumn.adapter = // Adapter with items <br>`",
			"4. `val lazyColumn = LazyColumn(items) { item -> <br> // Composable for item <br> }`",
		],
		answer: "1. `LazyColumn { <br> items(items) { item -> <br> // Composable for item <br> } <br> }`",
	},
	{
		id: 15,
		title: "Q15. What is the purpose of the `remember` function in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To create a new instance of a composable.",
			"2. To store a value in memory so it can be reused.",
			"3. To define a state variable.",
			"4. To handle user interactions.",
		],
		answer: "2. To store a value in memory so it can be reused.",
	},
	{
		id: 16,
		title: "Q16. What is the purpose of the `@Preview` annotation in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It marks a function as a composable.",
			"2. It defines a preview of a composable in the layout editor.",
			"3. It creates a preview of a composable in the Android Studio preview pane.",
			"4. Both 2 and 3.",
		],
		answer: "4. Both 2 and 3.",
	},
	{
		id: 17,
		title: "Q17. How do you use a `MaterialTheme` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `MaterialTheme.applyTo(this)`",
			"2. `val theme = MaterialTheme() <br> theme.applyTo(this)`",
			"3. `MaterialTheme { <br> // Composable content <br> }`",
			"4. `setTheme(MaterialTheme)`",
		],
		answer: "3. `MaterialTheme { <br> // Composable content <br> }`",
	},
	{
		id: 18,
		title: "Q18. How do you create a simple `LazyRow` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `LazyRow { <br> items(items) { item -> <br> // Composable for item <br> } <br> }`",
			"2. `RecyclerView.lazy { <br> items(items) { item -> <br> // View for item <br> } <br> }`",
			"3. `val lazyRow = LazyRow() <br> lazyRow.adapter = // Adapter with items <br>`",
			"4. `val lazyRow = LazyRow(items) { item -> <br> // Composable for item <br> }`",
		],
		answer: "1. `LazyRow { <br> items(items) { item -> <br> // Composable for item <br> } <br> }`",
	},
	{
		id: 19,
		title: "Q19. What is the purpose of the `remember` function in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To create a new instance of a composable.",
			"2. To store a value in memory so it can be reused.",
			"3. To define a state variable.",
			"4. To handle user interactions.",
		],
		answer: "2. To store a value in memory so it can be reused.",
	},
	{
		id: 20,
		title: "Q20. How do you define a state variable in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `var count = 0`",
			"2. `val count = mutableStateOf(0)`",
			"3. `val count = remember { 0 }`",
			"4. `val count = state { 0 }`",
		],
		answer: "4. `val count = state { 0 }`",
	},
	{
		id: 21,
		title: "Q21. How do you update a state variable in Jetpack Compose?",
		text: undefined,
		code2: "val count = state { 0 }",
		choices: [
			"1. `count = count + 1`",
			"2. `count.value = count.value + 1`",
			"3. `count.plusAssign(1)`",
			"4. `count.update { it + 1 }`",
		],
		answer: "4. `count.update { it + 1 }`",
	},
	{
		id: 22,
		title: "Q22. How do you create a simple button in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `Button { <br> // Action <br> }`",
			"2. `val button = Button() <br> button.setOnClickListener { <br> // Action <br> }`",
			"3. `Button.onClick { <br> // Action <br> }`",
			"4. `val button = Button(onClick = { <br> // Action <br> })`",
		],
		answer: "1. `Button { <br> // Action <br> }`",
	},
	{
		id: 23,
		title: "Q23. How do you create a simple `LazyColumn` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `LazyColumn { <br> items(items) { item -> <br> // Composable for item <br> } <br> }`",
			"2. `RecyclerView.lazy { <br> items(items) { item -> <br> // View for item <br> } <br> }`",
			"3. `val lazyColumn = LazyColumn() <br> lazyColumn.adapter = // Adapter with items <br>`",
			"4. `val lazyColumn = LazyColumn(items) { item -> <br> // Composable for item <br> }`",
		],
		answer: "1. `LazyColumn { <br> items(items) { item -> <br> // Composable for item <br> } <br> }`",
	},
	{
		id: 24,
		title: "Q24. What is the purpose of the `remember` function in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To create a new instance of a composable.",
			"2. To store a value in memory so it can be reused.",
			"3. To define a state variable.",
			"4. To handle user interactions.",
		],
		answer: "2. To store a value in memory so it can be reused.",
	},
	{
		id: 25,
		title: "Q25. What is the purpose of the `@Preview` annotation in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It marks a function as a composable.",
			"2. It defines a preview of a composable in the layout editor.",
			"3. It creates a preview of a composable in the Android Studio preview pane.",
			"4. Both 2 and 3.",
		],
		answer: "4. Both 2 and 3.",
	},
	{
		id: 26,
		title: "Q26. How do you use a `MaterialTheme` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `MaterialTheme.applyTo(this)`",
			"2. `val theme = MaterialTheme() <br> theme.applyTo(this)`",
			"3. `MaterialTheme { <br> // Composable content <br> }`",
			"4. `setTheme(MaterialTheme)`",
		],
		answer: "3. `MaterialTheme { <br> // Composable content <br> }`",
	},
	{
		id: 27,
		title: "Q27. How do you create a simple `LazyRow` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `LazyRow { <br> items(items) { item -> <br> // Composable for item <br> } <br> }`",
			"2. `RecyclerView.lazy { <br> items(items) { item -> <br> // View for item <br> } <br> }`",
			"3. `val lazyRow = LazyRow() <br> lazyRow.adapter = // Adapter with items <br>`",
			"4. `val lazyRow = LazyRow(items) { item -> <br> // Composable for item <br> }`",
		],
		answer: "1. `LazyRow { <br> items(items) { item -> <br> // Composable for item <br> } <br> }`",
	},
	{
		id: 28,
		title: "Q28. What is the purpose of the `remember` function in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To create a new instance of a composable.",
			"2. To store a value in memory so it can be reused.",
			"3. To define a state variable.",
			"4. To handle user interactions.",
		],
		answer: "2. To store a value in memory so it can be reused.",
	},
	{
		id: 29,
		title: "Q29. How do you define a state variable in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `var count = 0`",
			"2. `val count = mutableStateOf(0)`",
			"3. `val count = remember { 0 }`",
			"4. `val count = state { 0 }`",
		],
		answer: "4. `val count = state { 0 }`",
	},
	{
		id: 30,
		title: "Q30. How do you update a state variable in Jetpack Compose?",
		text: undefined,
		code2: "val count = state { 0 }",
		choices: [
			"1. `count = count + 1`",
			"2. `count.value = count.value + 1`",
			"3. `count.plusAssign(1)`",
			"4. `count.update { it + 1 }`",
		],
		answer: "4. `count.update { it + 1 }`",
	},
	{
		id: 31,
		title: "Q31. How do you create a simple button in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `Button { <br> // Action <br> }`",
			"2. `val button = Button() <br> button.setOnClickListener { <br> // Action <br> }`",
			"3. `Button.onClick { <br> // Action <br> }`",
			"4. `val button = Button(onClick = { <br> // Action <br> })`",
		],
		answer: "1. `Button { <br> // Action <br> }`",
	},
	{
		id: 32,
		title: "Q32. How do you create a simple `LazyColumn` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `LazyColumn { <br> items(items) { item -> <br> // Composable for item <br> } <br> }`",
			"2. `RecyclerView.lazy { <br> items(items) { item -> <br> // View for item <br> } <br> }`",
			"3. `val lazyColumn = LazyColumn() <br> lazyColumn.adapter = // Adapter with items <br>`",
			"4. `val lazyColumn = LazyColumn(items) { item -> <br> // Composable for item <br> }`",
		],
		answer: "1. `LazyColumn { <br> items(items) { item -> <br> // Composable for item <br> } <br> }`",
	},
	{
		id: 33,
		title: "Q33. What is the purpose of the `remember` function in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To create a new instance of a composable.",
			"2. To store a value in memory so it can be reused.",
			"3. To define a state variable.",
			"4. To handle user interactions.",
		],
		answer: "2. To store a value in memory so it can be reused.",
	},
	{
		id: 34,
		title: "Q34. What is the purpose of the `@Preview` annotation in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It marks a function as a composable.",
			"2. It defines a preview of a composable in the layout editor.",
			"3. It creates a preview of a composable in the Android Studio preview pane.",
			"4. Both 2 and 3.",
		],
		answer: "4. Both 2 and 3.",
	},
	{
		id: 35,
		title: "Q35. How do you use a `MaterialTheme` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `MaterialTheme.applyTo(this)`",
			"2. `val theme = MaterialTheme() <br> theme.applyTo(this)`",
			"3. `MaterialTheme { <br> // Composable content <br> }`",
			"4. `setTheme(MaterialTheme)`",
		],
		answer: "3. `MaterialTheme { <br> // Composable content <br> }`",
	},
	{
		id: 36,
		title: "Q36. How do you create a simple `LazyRow` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `LazyRow { <br> items(items) { item -> <br> // Composable for item <br> } <br> }`",
			"2. `RecyclerView.lazy { <br> items(items) { item -> <br> // View for item <br> } <br> }`",
			"3. `val lazyRow = LazyRow() <br> lazyRow.adapter = // Adapter with items <br>`",
			"4. `val lazyRow = LazyRow(items) { item -> <br> // Composable for item <br> }`",
		],
		answer: "1. `LazyRow { <br> items(items) { item -> <br> // Composable for item <br> } <br> }`",
	},
	{
		id: 37,
		title: "Q37.  What is the difference between a `val` and a `var` property in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `val` is immutable, `var` is mutable.",
			"2. `val` must be initialized immediately, `var` can be initialized later.",
			"3. `val` can be accessed from anywhere, `var` can only be accessed within the class.",
			"4. There is no difference; they are interchangeable.",
		],
		answer: "1. `val` is immutable, `var` is mutable.",
	},
	{
		id: 38,
		title: "Q38. What is the purpose of the `@Composable` annotation in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It marks a function as a view.",
			"2. It marks a function as a layout.",
			"3. It marks a function as a composable function.",
			"4. It marks a function as a state-holding function.",
		],
		answer: "3. It marks a function as a composable function.",
	},
	{
		id: 39,
		title: "Q39.  What is the difference between a `val` and a `var` property in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `val` is immutable, `var` is mutable.",
			"2. `val` must be initialized immediately, `var` can be initialized later.",
			"3. `val` can be accessed from anywhere, `var` can only be accessed within the class.",
			"4. There is no difference; they are interchangeable.",
		],
		answer: "1. `val` is immutable, `var` is mutable.",
	},
	{
		id: 40,
		title: "Q40. What is the role of `Modifier` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To define the layout parameters of a composable.",
			"2. To manage the state of a composable.",
			"3. To handle user interactions with a composable.",
			"4. To define the theme of a composable.",
		],
		answer: "1. To define the layout parameters of a composable.",
	},
	{
		id: 41,
		title: "Q41. How do you add a `padding` to a composable in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			'1. `Text("Hello", padding = 16.dp)`',
			'2. `Text("Hello").setPadding(16.dp)`',
			'3. `Text("Hello", Modifier.padding(16.dp))`',
			'4. `Text("Hello").apply { padding = 16.dp }`',
		],
		answer: '3. `Text("Hello", Modifier.padding(16.dp))`',
	},
	{
		id: 42,
		title: "Q42.  How do you define a property that can only be changed within the class itself (private setter) in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			'1. `var name: String = "John"`',
			'2. `val name: String = "John"`',
			'3. `private val name: String = "John"`',
			'4. `var name: String = "John" private set` ',
		],
		answer: '4. `var name: String = "John" private set` ',
	},
	{
		id: 43,
		title: "Q43.  What is the difference between a `val` and a `var` property in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `val` is immutable, `var` is mutable.",
			"2. `val` must be initialized immediately, `var` can be initialized later.",
			"3. `val` can be accessed from anywhere, `var` can only be accessed within the class.",
			"4. There is no difference; they are interchangeable.",
		],
		answer: "1. `val` is immutable, `var` is mutable.",
	},
	{
		id: 44,
		title: "Q44. What is the purpose of the `@Composable` annotation in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It marks a function as a view.",
			"2. It marks a function as a layout.",
			"3. It marks a function as a composable function.",
			"4. It marks a function as a state-holding function.",
		],
		answer: "3. It marks a function as a composable function.",
	},
	{
		id: 45,
		title: "Q45. What is the difference between `as` and `as?` in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `as` performs a safe cast, while `as?` throws an exception if the cast fails.",
			"2. `as?` performs a safe cast, while `as` throws an exception if the cast fails.",
			"3. `as` and `as?` are equivalent; there is no difference.",
			"4. `as` is used for type checking, while `as?` is used for type casting.",
		],
		answer: "2. `as?` performs a safe cast, while `as` throws an exception if the cast fails.",
	},
	{
		id: 46,
		title: "Q46. How do you create a simple `Column` layout in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			'1. `Column { <br> Text("Item 1") <br> Text("Item 2") <br> }`',
			'2. `LinearLayout.vertical { <br> Text("Item 1") <br> Text("Item 2") <br> }`',
			'3. `val column = Column() <br> column.addView(Text("Item 1")) <br> column.addView(Text("Item 2"))`',
			'4. `val column = Column(Text("Item 1"), Text("Item 2"))`',
		],
		answer: '1. `Column { <br> Text("Item 1") <br> Text("Item 2") <br> }`',
	},
	{
		id: 47,
		title: "Q47. What is the purpose of the `@Composable` annotation in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It marks a function as a view.",
			"2. It marks a function as a layout.",
			"3. It marks a function as a composable function.",
			"4. It marks a function as a state-holding function.",
		],
		answer: "3. It marks a function as a composable function.",
	},
	{
		id: 48,
		title: "Q48. What is the role of `Modifier` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To define the layout parameters of a composable.",
			"2. To manage the state of a composable.",
			"3. To handle user interactions with a composable.",
			"4. To define the theme of a composable.",
		],
		answer: "1. To define the layout parameters of a composable.",
	},
	{
		id: 49,
		title: "Q49. How do you add a `padding` to a composable in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			'1. `Text("Hello", padding = 16.dp)`',
			'2. `Text("Hello").setPadding(16.dp)`',
			'3. `Text("Hello", Modifier.padding(16.dp))`',
			'4. `Text("Hello").apply { padding = 16.dp }`',
		],
		answer: '3. `Text("Hello", Modifier.padding(16.dp))`',
	},
	{
		id: 51,
		title: "Q51. How do you create a simple `Row` layout in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			'1. `Row { <br> Text("Item 1") <br> Text("Item 2") <br> }`',
			'2. `LinearLayout.horizontal { <br> Text("Item 1") <br> Text("Item 2") <br> }`',
			'3. `val row = Row() <br> row.addView(Text("Item 1")) <br> row.addView(Text("Item 2"))`',
			'4. `val row = Row(Text("Item 1"), Text("Item 2"))`',
		],
		answer: '1. `Row { <br> Text("Item 1") <br> Text("Item 2") <br> }`',
	},
	{
		id: 52,
		title: "Q52. What is the purpose of the `remember` function in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To create a new instance of a composable.",
			"2. To store a value in memory so it can be reused.",
			"3. To define a state variable.",
			"4. To handle user interactions.",
		],
		answer: "2. To store a value in memory so it can be reused.",
	},
	{
		id: 53,
		title: "Q53. How do you define a state variable in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `var count = 0`",
			"2. `val count = mutableStateOf(0)`",
			"3. `val count = remember { 0 }`",
			"4. `val count = state { 0 }`",
		],
		answer: "4. `val count = state { 0 }`",
	},
	{
		id: 54,
		title: "Q54. How do you update a state variable in Jetpack Compose?",
		text: undefined,
		code2: "val count = state { 0 }",
		choices: [
			"1. `count = count + 1`",
			"2. `count.value = count.value + 1`",
			"3. `count.plusAssign(1)`",
			"4. `count.update { it + 1 }`",
		],
		answer: "4. `count.update { it + 1 }`",
	},
	{
		id: 55,
		title: "Q55. How do you create a simple button in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `Button { <br> // Action <br> }`",
			"2. `val button = Button() <br> button.setOnClickListener { <br> // Action <br> }`",
			"3. `Button.onClick { <br> // Action <br> }`",
			"4. `val button = Button(onClick = { <br> // Action <br> })`",
		],
		answer: "1. `Button { <br> // Action <br> }`",
	},
	{
		id: 56,
		title: "Q56. How do you create a simple `LazyColumn` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `LazyColumn { <br> items(items) { item -> <br> // Composable for item <br> } <br> }`",
			"2. `RecyclerView.lazy { <br> items(items) { item -> <br> // View for item <br> } <br> }`",
			"3. `val lazyColumn = LazyColumn() <br> lazyColumn.adapter = // Adapter with items <br>`",
			"4. `val lazyColumn = LazyColumn(items) { item -> <br> // Composable for item <br> }`",
		],
		answer: "1. `LazyColumn { <br> items(items) { item -> <br> // Composable for item <br> } <br> }`",
	},
	{
		id: 57,
		title: "Q57. What is the purpose of the `remember` function in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To create a new instance of a composable.",
			"2. To store a value in memory so it can be reused.",
			"3. To define a state variable.",
			"4. To handle user interactions.",
		],
		answer: "2. To store a value in memory so it can be reused.",
	},
	{
		id: 58,
		title: "Q58. What is the purpose of the `@Preview` annotation in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It marks a function as a composable.",
			"2. It defines a preview of a composable in the layout editor.",
			"3. It creates a preview of a composable in the Android Studio preview pane.",
			"4. Both 2 and 3.",
		],
		answer: "4. Both 2 and 3.",
	},
	{
		id: 59,
		title: "Q59. How do you use a `MaterialTheme` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `MaterialTheme.applyTo(this)`",
			"2. `val theme = MaterialTheme() <br> theme.applyTo(this)`",
			"3. `MaterialTheme { <br> // Composable content <br> }`",
			"4. `setTheme(MaterialTheme)`",
		],
		answer: "3. `MaterialTheme { <br> // Composable content <br> }`",
	},
	{
		id: 60,
		title: "Q60. How do you create a simple `LazyRow` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `LazyRow { <br> items(items) { item -> <br> // Composable for item <br> } <br> }`",
			"2. `RecyclerView.lazy { <br> items(items) { item -> <br> // View for item <br> } <br> }`",
			"3. `val lazyRow = LazyRow() <br> lazyRow.adapter = // Adapter with items <br>`",
			"4. `val lazyRow = LazyRow(items) { item -> <br> // Composable for item <br> }`",
		],
		answer: "1. `LazyRow { <br> items(items) { item -> <br> // Composable for item <br> } <br> }`",
	},
	{
		id: 61,
		title: "Q61. How do you create a simple `Card` composable in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `Card { <br> // Composable content <br> }`",
			"2. `val card = Card() <br> card.addView(// Composable content)`",
			"3. `Card.setContent { <br> // Composable content <br> }`",
			"4. `val card = Card(content = { <br> // Composable content <br> })`",
		],
		answer: "1. `Card { <br> // Composable content <br> }`",
	},
	{
		id: 62,
		title: "Q62. What is the difference between `remember` and `mutableStateOf` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `remember` is used for storing values, while `mutableStateOf` is used for defining state variables.",
			"2. `mutableStateOf` is used for storing values, while `remember` is used for defining state variables.",
			"3. `remember` and `mutableStateOf` are interchangeable.",
			"4. `remember` is used for creating composables, while `mutableStateOf` is used for updating composables.",
		],
		answer: "1. `remember` is used for storing values, while `mutableStateOf` is used for defining state variables.",
	},
	{
		id: 63,
		title: "Q63. What is the purpose of the `LaunchedEffect` composable in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To perform side effects, like network calls or database updates, within a composable.",
			"2. To define animations and transitions in a composable.",
			"3. To create a preview of a composable in the Android Studio preview pane.",
			"4. To handle user interactions with a composable.",
		],
		answer: "1. To perform side effects, like network calls or database updates, within a composable.",
	},
	{
		id: 64,
		title: "Q64. How do you create a simple `Image` composable in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `ImageView image = new ImageView(context)`",
			'2. `val image = Image(painter = // Painter resource, contentDescription = "Image description")`',
			"3. `Image.setImageResource(// Drawable resource)`",
			'4. `val image = ImageView(// Drawable resource, contentDescription = "Image description")`',
		],
		answer: '2. `val image = Image(painter = // Painter resource, contentDescription = "Image description")`',
	},
	{
		id: 65,
		title: "Q65. What is the difference between `remember` and `mutableStateOf` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `remember` is used for storing values, while `mutableStateOf` is used for defining state variables.",
			"2. `mutableStateOf` is used for storing values, while `remember` is used for defining state variables.",
			"3. `remember` and `mutableStateOf` are interchangeable.",
			"4. `remember` is used for creating composables, while `mutableStateOf` is used for updating composables.",
		],
		answer: "1. `remember` is used for storing values, while `mutableStateOf` is used for defining state variables.",
	},
	{
		id: 66,
		title: "Q66. How do you create a simple `Scaffold` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `Scaffold { <br> // Composable content <br> }`",
			"2. `val scaffold = Scaffold() <br> scaffold.setContent { <br> // Composable content <br> }`",
			"3. `Scaffold.setContent { <br> // Composable content <br> }`",
			"4. `val scaffold = Scaffold(content = { <br> // Composable content <br> })`",
		],
		answer: "1. `Scaffold { <br> // Composable content <br> }`",
	},
	{
		id: 67,
		title: "Q67. What is the purpose of the `LaunchedEffect` composable in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To perform side effects, like network calls or database updates, within a composable.",
			"2. To define animations and transitions in a composable.",
			"3. To create a preview of a composable in the Android Studio preview pane.",
			"4. To handle user interactions with a composable.",
		],
		answer: "1. To perform side effects, like network calls or database updates, within a composable.",
	},
	{
		id: 68,
		title: "Q68. How do you create a simple `Image` composable in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `ImageView image = new ImageView(context)`",
			'2. `val image = Image(painter = // Painter resource, contentDescription = "Image description")`',
			"3. `Image.setImageResource(// Drawable resource)`",
			'4. `val image = ImageView(// Drawable resource, contentDescription = "Image description")`',
		],
		answer: '2. `val image = Image(painter = // Painter resource, contentDescription = "Image description")`',
	},
	{
		id: 69,
		title: "Q69.  What is the difference between a `val` and a `var` property in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `val` is immutable, `var` is mutable.",
			"2. `val` must be initialized immediately, `var` can be initialized later.",
			"3. `val` can be accessed from anywhere, `var` can only be accessed within the class.",
			"4. There is no difference; they are interchangeable.",
		],
		answer: "1. `val` is immutable, `var` is mutable.",
	},
	{
		id: 70,
		title: "Q70. How do you use a `MaterialTheme` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `MaterialTheme.applyTo(this)`",
			"2. `val theme = MaterialTheme() <br> theme.applyTo(this)`",
			"3. `MaterialTheme { <br> // Composable content <br> }`",
			"4. `setTheme(MaterialTheme)`",
		],
		answer: "3. `MaterialTheme { <br> // Composable content <br> }`",
	},
	{
		id: 71,
		title: "Q71. What is the purpose of the `@Preview` annotation in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It marks a function as a composable.",
			"2. It defines a preview of a composable in the layout editor.",
			"3. It creates a preview of a composable in the Android Studio preview pane.",
			"4. Both 2 and 3.",
		],
		answer: "4. Both 2 and 3.",
	},
	{
		id: 72,
		title: "Q72. How do you create a simple `LazyRow` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `LazyRow { <br> items(items) { item -> <br> // Composable for item <br> } <br> }`",
			"2. `RecyclerView.lazy { <br> items(items) { item -> <br> // View for item <br> } <br> }`",
			"3. `val lazyRow = LazyRow() <br> lazyRow.adapter = // Adapter with items <br>`",
			"4. `val lazyRow = LazyRow(items) { item -> <br> // Composable for item <br> }`",
		],
		answer: "1. `LazyRow { <br> items(items) { item -> <br> // Composable for item <br> } <br> }`",
	},
	{
		id: 73,
		title: "Q73. How do you create a simple `Card` composable in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `Card { <br> // Composable content <br> }`",
			"2. `val card = Card() <br> card.addView(// Composable content)`",
			"3. `Card.setContent { <br> // Composable content <br> }`",
			"4. `val card = Card(content = { <br> // Composable content <br> })`",
		],
		answer: "1. `Card { <br> // Composable content <br> }`",
	},
	{
		id: 74,
		title: "Q74. What is the difference between `remember` and `mutableStateOf` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `remember` is used for storing values, while `mutableStateOf` is used for defining state variables.",
			"2. `mutableStateOf` is used for storing values, while `remember` is used for defining state variables.",
			"3. `remember` and `mutableStateOf` are interchangeable.",
			"4. `remember` is used for creating composables, while `mutableStateOf` is used for updating composables.",
		],
		answer: "1. `remember` is used for storing values, while `mutableStateOf` is used for defining state variables.",
	},
	{
		id: 75,
		title: "Q75. What is the purpose of the `LaunchedEffect` composable in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To perform side effects, like network calls or database updates, within a composable.",
			"2. To define animations and transitions in a composable.",
			"3. To create a preview of a composable in the Android Studio preview pane.",
			"4. To handle user interactions with a composable.",
		],
		answer: "1. To perform side effects, like network calls or database updates, within a composable.",
	},
	{
		id: 76,
		title: "Q76. How do you create a simple `Image` composable in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `ImageView image = new ImageView(context)`",
			'2. `val image = Image(painter = // Painter resource, contentDescription = "Image description")`',
			"3. `Image.setImageResource(// Drawable resource)`",
			'4. `val image = ImageView(// Drawable resource, contentDescription = "Image description")`',
		],
		answer: '2. `val image = Image(painter = // Painter resource, contentDescription = "Image description")`',
	},
	{
		id: 77,
		title: "Q77.  What is the difference between a `val` and a `var` property in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `val` is immutable, `var` is mutable.",
			"2. `val` must be initialized immediately, `var` can be initialized later.",
			"3. `val` can be accessed from anywhere, `var` can only be accessed within the class.",
			"4. There is no difference; they are interchangeable.",
		],
		answer: "1. `val` is immutable, `var` is mutable.",
	},
	{
		id: 78,
		title: "Q78.  How do you define a property that can only be changed within the class itself (private setter) in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			'1. `var name: String = "John"`',
			'2. `val name: String = "John"`',
			'3. `private val name: String = "John"`',
			'4. `var name: String = "John" private set` ',
		],
		answer: '4. `var name: String = "John" private set` ',
	},
	{
		id: 79,
		title: "Q79. What is the difference between `remember` and `mutableStateOf` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `remember` is used for storing values, while `mutableStateOf` is used for defining state variables.",
			"2. `mutableStateOf` is used for storing values, while `remember` is used for defining state variables.",
			"3. `remember` and `mutableStateOf` are interchangeable.",
			"4. `remember` is used for creating composables, while `mutableStateOf` is used for updating composables.",
		],
		answer: "1. `remember` is used for storing values, while `mutableStateOf` is used for defining state variables.",
	},
	{
		id: 80,
		title: "Q80. How do you create a simple `Scaffold` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `Scaffold { <br> // Composable content <br> }`",
			"2. `val scaffold = Scaffold() <br> scaffold.setContent { <br> // Composable content <br> }`",
			"3. `Scaffold.setContent { <br> // Composable content <br> }`",
			"4. `val scaffold = Scaffold(content = { <br> // Composable content <br> })`",
		],
		answer: "1. `Scaffold { <br> // Composable content <br> }`",
	},
	{
		id: 81,
		title: "Q81. How do you handle user input in a `TextField` in Jetpack Compose?",
		text: undefined,
		code2: 'val textState = state { ""}',
		choices: [
			"1. `TextField(value = textState, onTextChanged = { newText -> textState = newText })`",
			"2. `TextField(value = textState, onValueChange = { newText -> textState = newText })`",
			"3. `TextField(value = textState, onTextChange = { newText -> textState.value = newText })`",
			"4. `TextField(value = textState, onValueChange = { newText -> textState.update { newText } })`",
		],
		answer: "4. `TextField(value = textState, onValueChange = { newText -> textState.update { newText } })`",
	},
	{
		id: 82,
		title: "Q82. How do you use a `LazyColumn` to display a list of data in Jetpack Compose?",
		text: undefined,
		code2: 'val items = listOf("Item 1", "Item 2", "Item 3")',
		choices: [
			"1. `LazyColumn { <br> items(items) { item -> <br> Text(item) <br> } <br> }`",
			"2. `RecyclerView.lazy { <br> items(items) { item -> <br> TextView(item) <br> } <br> }`",
			"3. `val lazyColumn = LazyColumn() <br> lazyColumn.adapter = // Adapter with items <br>`",
			"4. `val lazyColumn = LazyColumn(items) { item -> <br> Text(item) <br> }`",
		],
		answer: "1. `LazyColumn { <br> items(items) { item -> <br> Text(item) <br> } <br> }`",
	},
	{
		id: 83,
		title: "Q83. What is the purpose of the `LaunchedEffect` composable in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To perform side effects, like network calls or database updates, within a composable.",
			"2. To define animations and transitions in a composable.",
			"3. To create a preview of a composable in the Android Studio preview pane.",
			"4. To handle user interactions with a composable.",
		],
		answer: "1. To perform side effects, like network calls or database updates, within a composable.",
	},
	{
		id: 84,
		title: "Q84. How do you create a simple `Image` composable in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `ImageView image = new ImageView(context)`",
			'2. `val image = Image(painter = // Painter resource, contentDescription = "Image description")`',
			"3. `Image.setImageResource(// Drawable resource)`",
			'4. `val image = ImageView(// Drawable resource, contentDescription = "Image description")`',
		],
		answer: '2. `val image = Image(painter = // Painter resource, contentDescription = "Image description")`',
	},
	{
		id: 85,
		title: "Q85. How do you create a simple `Card` composable in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `Card { <br> // Composable content <br> }`",
			"2. `val card = Card() <br> card.addView(// Composable content)`",
			"3. `Card.setContent { <br> // Composable content <br> }`",
			"4. `val card = Card(content = { <br> // Composable content <br> })`",
		],
		answer: "1. `Card { <br> // Composable content <br> }`",
	},
	{
		id: 86,
		title: "Q86. What is the difference between `remember` and `mutableStateOf` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `remember` is used for storing values, while `mutableStateOf` is used for defining state variables.",
			"2. `mutableStateOf` is used for storing values, while `remember` is used for defining state variables.",
			"3. `remember` and `mutableStateOf` are interchangeable.",
			"4. `remember` is used for creating composables, while `mutableStateOf` is used for updating composables.",
		],
		answer: "1. `remember` is used for storing values, while `mutableStateOf` is used for defining state variables.",
	},
	{
		id: 87,
		title: "Q87. What is the purpose of the `LaunchedEffect` composable in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To perform side effects, like network calls or database updates, within a composable.",
			"2. To define animations and transitions in a composable.",
			"3. To create a preview of a composable in the Android Studio preview pane.",
			"4. To handle user interactions with a composable.",
		],
		answer: "1. To perform side effects, like network calls or database updates, within a composable.",
	},
	{
		id: 88,
		title: "Q88. How do you create a simple `Image` composable in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `ImageView image = new ImageView(context)`",
			'2. `val image = Image(painter = // Painter resource, contentDescription = "Image description")`',
			"3. `Image.setImageResource(// Drawable resource)`",
			'4. `val image = ImageView(// Drawable resource, contentDescription = "Image description")`',
		],
		answer: '2. `val image = Image(painter = // Painter resource, contentDescription = "Image description")`',
	},
	{
		id: 89,
		title: "Q89. How do you create a simple `Scaffold` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `Scaffold { <br> // Composable content <br> }`",
			"2. `val scaffold = Scaffold() <br> scaffold.setContent { <br> // Composable content <br> }`",
			"3. `Scaffold.setContent { <br> // Composable content <br> }`",
			"4. `val scaffold = Scaffold(content = { <br> // Composable content <br> })`",
		],
		answer: "1. `Scaffold { <br> // Composable content <br> }`",
	},
	{
		id: 90,
		title: "Q90. How do you handle user input in a `TextField` in Jetpack Compose?",
		text: undefined,
		code2: 'val textState = state { ""}',
		choices: [
			"1. `TextField(value = textState, onTextChanged = { newText -> textState = newText })`",
			"2. `TextField(value = textState, onValueChange = { newText -> textState = newText })`",
			"3. `TextField(value = textState, onTextChange = { newText -> textState.value = newText })`",
			"4. `TextField(value = textState, onValueChange = { newText -> textState.update { newText } })`",
		],
		answer: "4. `TextField(value = textState, onValueChange = { newText -> textState.update { newText } })`",
	},
	{
		id: 91,
		title: "Q91. How do you use a `LazyColumn` to display a list of data in Jetpack Compose?",
		text: undefined,
		code2: 'val items = listOf("Item 1", "Item 2", "Item 3")',
		choices: [
			"1. `LazyColumn { <br> items(items) { item -> <br> Text(item) <br> } <br> }`",
			"2. `RecyclerView.lazy { <br> items(items) { item -> <br> TextView(item) <br> } <br> }`",
			"3. `val lazyColumn = LazyColumn() <br> lazyColumn.adapter = // Adapter with items <br>`",
			"4. `val lazyColumn = LazyColumn(items) { item -> <br> Text(item) <br> }`",
		],
		answer: "1. `LazyColumn { <br> items(items) { item -> <br> Text(item) <br> } <br> }`",
	},
	{
		id: 92,
		title: "Q92.  What is the difference between a `val` and a `var` property in Kotlin?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `val` is immutable, `var` is mutable.",
			"2. `val` must be initialized immediately, `var` can be initialized later.",
			"3. `val` can be accessed from anywhere, `var` can only be accessed within the class.",
			"4. There is no difference; they are interchangeable.",
		],
		answer: "1. `val` is immutable, `var` is mutable.",
	},
	{
		id: 93,
		title: "Q93. What is the purpose of the `@Composable` annotation in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It marks a function as a view.",
			"2. It marks a function as a layout.",
			"3. It marks a function as a composable function.",
			"4. It marks a function as a state-holding function.",
		],
		answer: "3. It marks a function as a composable function.",
	},
	{
		id: 94,
		title: "Q94. What is the difference between `remember` and `mutableStateOf` in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `remember` is used for storing values, while `mutableStateOf` is used for defining state variables.",
			"2. `mutableStateOf` is used for storing values, while `remember` is used for defining state variables.",
			"3. `remember` and `mutableStateOf` are interchangeable.",
			"4. `remember` is used for creating composables, while `mutableStateOf` is used for updating composables.",
		],
		answer: "1. `remember` is used for storing values, while `mutableStateOf` is used for defining state variables.",
	},
	{
		id: 95,
		title: "Q95. What is the purpose of the `@Preview` annotation in Jetpack Compose?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. It marks a function as a composable.",
			"2. It defines a preview of a composable in the layout editor.",
			"3. It creates a preview of a composable in the Android Studio preview pane.",
			"4. Both 2 and 3.",
		],
		answer: "4. Both 2 and 3.",
	},
];

let AndroidBasics = [
	{
		id: 1,
		title: "Q1. What is the primary purpose of an Activity in Android?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To manage the background processes of an app",
			"2. To provide a user interface for interacting with the app",
			"3. To handle data storage and retrieval",
			"4. To communicate with other apps on the device",
		],
		answer: "2. To provide a user interface for interacting with the app",
	},
	{
		id: 2,
		title: "Q2. How do you start a new Activity from another Activity?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `startActivity(new Intent(this, NewActivity.class))`",
			"2. `launchActivity(NewActivity.class)`",
			"3. `createActivity(NewActivity.class)`",
			"4. `openActivity(NewActivity.class)`",
		],
		answer: "1. `startActivity(new Intent(this, NewActivity.class))`",
	},
	{
		id: 3,
		title: "Q3. How can you pass data to another Activity when starting it?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. Using global variables",
			"2. Using an Intent with extras",
			"3. Using a SharedPreferences file",
			"4. Using a database",
		],
		answer: "2. Using an Intent with extras",
	},
	{
		id: 4,
		title: "Q4. Which lifecycle method is called when an Activity is created?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `onStart()`",
			"2. `onCreate()`",
			"3. `onResume()`",
			"4. `onRestart()`",
		],
		answer: "2. `onCreate()`",
	},
	{
		id: 5,
		title: "Q5. What is the difference between `onPause()` and `onStop()`?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `onPause()` is called when the Activity is partially visible, while `onStop()` is called when it's completely hidden.",
			"2. `onStop()` is called when the Activity is partially visible, while `onPause()` is called when it's completely hidden.",
			"3. `onPause()` is called when the Activity is destroyed, while `onStop()` is called when it's paused.",
			"4. `onStop()` is called when the Activity is destroyed, while `onPause()` is called when it's paused.",
		],
		answer: "1. `onPause()` is called when the Activity is partially visible, while `onStop()` is called when it's completely hidden.",
	},
	{
		id: 6,
		title: "Q6. What is the purpose of the `onSaveInstanceState()` method?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. To save the current state of the Activity before it's destroyed.",
			"2. To create a new instance of the Activity.",
			"3. To handle user input events.",
			"4. To manage background tasks.",
		],
		answer: "1. To save the current state of the Activity before it's destroyed.",
	},
	{
		id: 7,
		title: "Q7. How can you ensure that an Activity is launched only once per session?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. Using the `FLAG_ACTIVITY_NEW_TASK` flag in the Intent.",
			"2. Using the `FLAG_ACTIVITY_SINGLE_TOP` flag in the Intent.",
			"3. Using the `FLAG_ACTIVITY_CLEAR_TOP` flag in the Intent.",
			"4. Using the `FLAG_ACTIVITY_NO_HISTORY` flag in the Intent.",
		],
		answer: "2. Using the `FLAG_ACTIVITY_SINGLE_TOP` flag in the Intent.",
	},
	{
		id: 8,
		title: "Q8. Explain the concept of an Activity's task and back stack.",
		text: undefined,
		code2: undefined,
		choices: [
			"1. A task represents a group of Activities related to a specific purpose, while the back stack holds the history of launched Activities within a task.",
			"2. A task is a single Activity, while the back stack is used to manage the order of Activities in the app.",
			"3. A task represents the current Activity, while the back stack holds the history of all launched Activities in the app.",
			"4. A task is a group of Activities related to a specific purpose, while the back stack is used to manage the order of Activities in the system.",
		],
		answer: "1. A task represents a group of Activities related to a specific purpose, while the back stack holds the history of launched Activities within a task.",
	},
	{
		id: 9,
		title: "Q9. How can you make an Activity finish itself after starting another Activity?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. By setting `finish()` in the `onPause()` method.",
			"2. By setting `finish()` in the `onStop()` method.",
			"3. By setting `finish()` in the `onCreate()` method of the new Activity.",
			"4. By setting `finish()` in the `startActivity()` method.",
		],
		answer: "4. By setting `finish()` in the `startActivity()` method.",
	},
	{
		id: 10,
		title: "Q10. What is the difference between `startActivityForResult()` and `startActivity()`?",
		text: undefined,
		code2: undefined,
		choices: [
			"1. `startActivityForResult()` allows you to receive a result from the started Activity, while `startActivity()` does not.",
			"2. `startActivity()` allows you to receive a result from the started Activity, while `startActivityForResult()` does not.",
			"3. `startActivityForResult()` is used to start an Activity in a new task, while `startActivity()` is used to start an Activity in the same task.",
			"4. `startActivity()` is used to start an Activity in a new task, while `startActivityForResult()` is used to start an Activity in the same task.",
		],
		answer: "1. `startActivityForResult()` allows you to receive a result from the started Activity, while `startActivity()` does not.",
	},
	{
  "id": 11,
  "title": "Q11. What is the purpose of an Intent in Android?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To represent a user interface element",
    "2. To communicate between different components of an Android app",
    "3. To manage data storage and retrieval",
    "4. To handle network requests"
  ],
  "answer": "2. To communicate between different components of an Android app"
},
{
  "id": 12,
  "title": "Q12. What are the two main types of Intents?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. Explicit and Implicit",
    "2. Direct and Indirect",
    "3. Local and Remote",
    "4. Simple and Complex"
  ],
  "answer": "1. Explicit and Implicit"
},
{
  "id": 13,
  "title": "Q13. How do you create an explicit Intent?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. `new Intent(this, NewActivity.class)`",
    "2. `new Intent(ACTION_VIEW, Uri.parse('https://www.google.com'))`",
    "3. `new Intent('android.intent.action.SEND')`",
    "4. `new Intent(ACTION_DIAL, Uri.parse('tel:1234567890'))`",
		],
		answer: "1. `new Intent(this, NewActivity.class)`",
	},
	{
  "id": 14,
  "title": "Q14. What is an implicit Intent?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. An Intent that specifies the exact component to be launched.",
    "2. An Intent that specifies the action and data to be processed, but not the specific component to handle it.",
    "3. An Intent that is used to start a service.",
    "4. An Intent that is used to send a broadcast."
  ],
  "answer": "2. An Intent that specifies the action and data to be processed, but not the specific component to handle it."
},
{
  "id": 15,
  "title": "Q15. How can you start an activity to open a web page using an Intent?",
  "text": undefined,
  "code2": undefined,
		choices: [
			"1. `startActivity(new Intent(ACTION_VIEW, Uri.parse('https://www.google.com')))`",
			"2. `startActivity(new Intent(ACTION_SEND, Uri.parse('https://www.google.com')))`",
			"3. `startActivity(new Intent(ACTION_DIAL, Uri.parse('https://www.google.com')))`",
			"4. `startActivity(new Intent(ACTION_CALL, Uri.parse('https://www.google.com')))`",
		],
		answer: "1. `startActivity(new Intent(ACTION_VIEW, Uri.parse('https://www.google.com')))`",
},
{
  "id": 16,
  "title": "Q16. What are Intent filters used for?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To specify the type of data an Activity can handle.",
    "2. To define the actions an Activity can respond to.",
    "3. To control the lifecycle of an Activity.",
    "4. To manage data storage and retrieval."
  ],
  "answer": "1. To specify the type of data an Activity can handle."
},
{
  "id": 17,
  "title": "Q17. How can you send a text message using an Intent?",
  "text": undefined,
  "code2": undefined,
		choices: [
			"1. `startActivity(new Intent(ACTION_SEND, Uri.parse('sms:1234567890')))`",
			"2. `startActivity(new Intent(ACTION_SENDTO, Uri.parse('smsto:1234567890')))`",
			"3. `startActivity(new Intent(ACTION_CALL, Uri.parse('tel:1234567890')))`",
			"4. `startActivity(new Intent(ACTION_DIAL, Uri.parse('tel:1234567890')))`",
		],
		answer: "2. `startActivity(new Intent(ACTION_SENDTO, Uri.parse('smsto:1234567890')))`",
},
{
  "id": 18,
  "title": "Q18. What is the purpose of the `PendingIntent` class?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To represent an intent that can be executed at a later time.",
    "2. To store user input data.",
    "3. To manage the lifecycle of an Activity.",
    "4. To handle network requests."
  ],
  "answer": "1. To represent an intent that can be executed at a later time."
},
{
  "id": 19,
  "title": "Q19. How can you create a PendingIntent that triggers an Activity when a notification is clicked?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. `PendingIntent.getActivity(context, 0, new Intent(context, NewActivity.class), 0)`",
    "2. `PendingIntent.getService(context, 0, new Intent(context, NewService.class), 0)`",
    "3. `PendingIntent.getBroadcast(context, 0, new Intent(context, NewReceiver.class), 0)`",
    "4. `PendingIntent.getAlarm(context, 0, new Intent(context, NewAlarm.class), 0)`"
  ],
  "answer": "1. `PendingIntent.getActivity(context, 0, new Intent(context, NewActivity.class), 0)`"
},
{
  "id": 20,
  "title": "Q20. What is the difference between `startService()` and `bindService()`?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. `startService()` starts a service that runs in the background, while `bindService()` starts a service that is bound to a specific client.",
    "2. `bindService()` starts a service that runs in the background, while `startService()` starts a service that is bound to a specific client.",
    "3. `startService()` starts a service that is used to send broadcasts, while `bindService()` starts a service that is used to handle data.",
    "4. `bindService()` starts a service that is used to send broadcasts, while `startService()` starts a service that is used to handle data."
  ],
  "answer": "1. `startService()` starts a service that runs in the background, while `bindService()` starts a service that is bound to a specific client."
},
{
  "id": 21,
  "title": "Q21. List the lifecycle methods of an Activity in order of execution.",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. `onCreate()`, `onStart()`, `onResume()`, `onPause()`, `onStop()`, `onRestart()`, `onDestroy()`",
    "2. `onCreate()`, `onResume()`, `onStart()`, `onPause()`, `onStop()`, `onDestroy()`, `onRestart()`",
    "3. `onStart()`, `onCreate()`, `onResume()`, `onPause()`, `onStop()`, `onRestart()`, `onDestroy()`",
    "4. `onCreate()`, `onResume()`, `onStart()`, `onRestart()`, `onPause()`, `onStop()`, `onDestroy()`"
  ],
  "answer": "1. `onCreate()`, `onStart()`, `onResume()`, `onPause()`, `onStop()`, `onRestart()`, `onDestroy()`"
},
{
  "id": 22,
  "title": "Q22. In which lifecycle method should you initialize UI elements?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. `onCreate()`",
    "2. `onStart()`",
    "3. `onResume()`",
    "4. `onRestart()`"
  ],
  "answer": "1. `onCreate()`"
},
{
  "id": 23,
  "title": "Q23. When is the `onResume()` method called?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. When the Activity is created.",
    "2. When the Activity becomes visible to the user.",
    "3. When the Activity is paused.",
    "4. When the Activity is destroyed."
  ],
  "answer": "2. When the Activity becomes visible to the user."
},
{
  "id": 24,
  "title": "Q24. What happens when the `onPause()` method is called?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. The Activity is completely destroyed.",
    "2. The Activity is partially visible.",
    "3. The Activity is hidden from the user.",
    "4. The Activity is in the background, but still running."
  ],
  "answer": "2. The Activity is partially visible."
},
{
  "id": 25,
  "title": "Q25. Which lifecycle method is called when an Activity is brought back to the foreground?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. `onResume()`",
    "2. `onRestart()`",
    "3. `onStart()`",
    "4. `onCreate()`"
  ],
  "answer": "1. `onResume()`"
},
{
  "id": 26,
  "title": "Q26. When is the `onRestart()` method called?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. When the Activity is created.",
    "2. When the Activity is brought back to the foreground after being stopped.",
    "3. When the Activity is paused.",
    "4. When the Activity is destroyed."
  ],
  "answer": "2. When the Activity is brought back to the foreground after being stopped."
},
{
  "id": 27,
  "title": "Q27. What is the purpose of the `onDestroy()` method?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To save the current state of the Activity.",
    "2. To release resources held by the Activity.",
    "3. To handle user input events.",
    "4. To start a new Activity."
  ],
  "answer": "2. To release resources held by the Activity."
},
{
  "id": 28,
  "title": "Q28. How can you use the `onSavedInstanceState()` method to save the current state of an Activity?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By storing data in a global variable.",
    "2. By saving data to a file.",
    "3. By using a `Bundle` object to store key-value pairs.",
    "4. By using a database to store the data."
  ],
  "answer": "3. By using a `Bundle` object to store key-value pairs."
},
{
  "id": 29,
  "title": "Q29. How do you restore the saved state of an Activity using the `onRestoreInstanceState()` method?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By reading data from a global variable.",
    "2. By reading data from a file.",
    "3. By retrieving data from the `Bundle` object passed to the method.",
    "4. By retrieving data from a database."
  ],
  "answer": "3. By retrieving data from the `Bundle` object passed to the method."
},
{
  "id": 30,
  "title": "Q30. Explain the concept of Activity state and how it is preserved during configuration changes.",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. Activity state refers to the data and UI elements associated with the Activity, and it is preserved by automatically saving and restoring the `Bundle` object during configuration changes.",
    "2. Activity state refers to the data and UI elements associated with the Activity, and it is preserved by using the `onSavedInstanceState()` and `onRestoreInstanceState()` methods.",
    "3. Activity state refers to the data and UI elements associated with the Activity, and it is preserved by using the `onPause()` and `onResume()` methods.",
    "4. Activity state refers to the data and UI elements associated with the Activity, and it is preserved by using the `onStop()` and `onRestart()` methods."
  ],
  "answer": "1. Activity state refers to the data and UI elements associated with the Activity, and it is preserved by automatically saving and restoring the `Bundle` object during configuration changes."
},
{
  "id": 31,
  "title": "Q31. What is a Broadcast Receiver?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. A component that listens for system events and broadcasts them to other apps.",
    "2. A component that handles user input events.",
    "3. A component that manages data storage and retrieval.",
    "4. A component that handles network requests."
  ],
  "answer": "1. A component that listens for system events and broadcasts them to other apps."
},
{
  "id": 32,
  "title": "Q32. How do you register a Broadcast Receiver?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By using the `registerReceiver()` method in your Activity.",
    "2. By declaring the Receiver in the manifest.",
    "3. By using the `startService()` method.",
    "4. By using the `bindService()` method."
  ],
  "answer": "1. By using the `registerReceiver()` method in your Activity."
},
{
  "id": 33,
  "title": "Q33. What is the difference between static and dynamic registration of a Broadcast Receiver?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. Static registration registers the Receiver in the manifest, while dynamic registration registers it in code.",
    "2. Dynamic registration registers the Receiver in the manifest, while static registration registers it in code.",
    "3. Static registration is used for system broadcasts, while dynamic registration is used for app-specific broadcasts.",
    "4. Dynamic registration is used for system broadcasts, while static registration is used for app-specific broadcasts."
  ],
  "answer": "1. Static registration registers the Receiver in the manifest, while dynamic registration registers it in code."
},
{
  "id": 34,
  "title": "Q34. What is the purpose of the `onReceive()` method in a Broadcast Receiver?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To register the Receiver for broadcasts.",
    "2. To handle received broadcasts.",
    "3. To send broadcasts to other apps.",
    "4. To manage the lifecycle of the Receiver."
  ],
  "answer": "2. To handle received broadcasts."
},
{
  "id": 35,
  "title": "Q35. How do you unregister a Broadcast Receiver?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By calling the `unregisterReceiver()` method in your Activity.",
    "2. By removing the Receiver declaration from the manifest.",
    "3. By using the `stopService()` method.",
    "4. By using the `unbindService()` method."
  ],
  "answer": "1. By calling the `unregisterReceiver()` method in your Activity."
},
{
  "id": 36,
  "title": "Q36. What is the purpose of the `sendBroadcast()` method?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To register a Broadcast Receiver.",
    "2. To send a broadcast to other apps.",
    "3. To handle received broadcasts.",
    "4. To manage the lifecycle of a Broadcast Receiver."
  ],
  "answer": "2. To send a broadcast to other apps."
},
{
  "id": 37,
  "title": "Q37. What is the difference between `sendBroadcast()`, `sendOrderedBroadcast()`, and `sendStickyBroadcast()`?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. `sendBroadcast()` sends a broadcast to all registered receivers, while `sendOrderedBroadcast()` sends a broadcast to receivers in a specific order.",
    "2. `sendOrderedBroadcast()` sends a broadcast to all registered receivers, while `sendBroadcast()` sends a broadcast to receivers in a specific order.",
    "3. `sendStickyBroadcast()` sends a broadcast that remains available to all registered receivers until explicitly removed.",
    "4. All three methods send broadcasts to registered receivers, but with different levels of control and behavior."
  ],
  "answer": "4. All three methods send broadcasts to registered receivers, but with different levels of control and behavior."
},
{
  "id": 38,
  "title": "Q38. What are some common system broadcasts that you can listen to?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. `ACTION_BOOT_COMPLETED`",
    "2. `ACTION_BATTERY_CHANGED`",
    "3. `ACTION_SCREEN_ON`",
    "4. `ACTION_HEADSET_PLUG`",
    "5. All of the above"
  ],
  "answer": "5. All of the above"
},
{
  "id": 39,
  "title": "Q39. How can you create a custom broadcast to communicate between different components of your app?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By creating a new Intent with a custom action and sending it using `sendBroadcast()`.",
    "2. By using a SharedPreferences file to store and retrieve data.",
    "3. By using a database to store and retrieve data.",
    "4. By using a global variable to share data."
  ],
  "answer": "1. By creating a new Intent with a custom action and sending it using `sendBroadcast()`."
},
{
  "id": 40,
  "title": "Q40. What is the best way to handle network connectivity changes in an Android app?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By using the `NetworkChangeReceiver` class.",
    "2. By listening for the `ACTION_BATTERY_CHANGED` broadcast.",
    "3. By polling the network status periodically.",
    "4. By using a background service to monitor network connectivity."
  ],
  "answer": "1. By using the `NetworkChangeReceiver` class."
},
{
  "id": 41,
  "title": "Q41. What is the purpose of the Notification Manager in Android?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To manage data storage and retrieval.",
    "2. To handle user input events.",
    "3. To display notifications to the user.",
    "4. To communicate with other apps on the device."
  ],
  "answer": "3. To display notifications to the user."
},
{
  "id": 42,
  "title": "Q42. How do you get an instance of the Notification Manager in an Activity?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. `NotificationManager manager = new NotificationManager()`",
    "2. `NotificationManager manager = getSystemService(NOTIFICATION_SERVICE)`",
    "3. `NotificationManager manager = getNotificationManager()`",
    "4. `NotificationManager manager = NotificationManager.getInstance()`"
  ],
  "answer": "2. `NotificationManager manager = getSystemService(NOTIFICATION_SERVICE)`"
},
{
  "id": 43,
  "title": "Q43. What is a Notification Channel?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. A way to group related notifications together.",
    "2. A way to define the appearance of a notification.",
    "3. A way to set the priority of a notification.",
    "4. A way to handle user interactions with a notification."
  ],
  "answer": "1. A way to group related notifications together."
},
{
  "id": 44,
  "title": "Q44. How do you create a Notification Channel?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By calling the `createNotificationChannel()` method on the Notification Manager.",
    "2. By declaring the channel in the manifest.",
    "3. By using the `NotificationCompat.Builder` class.",
    "4. By using the `NotificationCompat.Channel` class."
  ],
  "answer": "1. By calling the `createNotificationChannel()` method on the Notification Manager."
},
{
  "id": 45,
  "title": "Q45. What is the purpose of the `NotificationCompat.Builder` class?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To create a Notification Channel.",
    "2. To build a notification object.",
    "3. To display a notification to the user.",
    "4. To handle user interactions with a notification."
  ],
  "answer": "2. To build a notification object."
},
{
  "id": 46,
  "title": "Q46. How do you set the content of a notification?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By using the `setContentTitle()` and `setContentText()` methods of the Notification Builder.",
    "2. By using the `setContent()` method of the Notification Builder.",
    "3. By setting the content in the `onReceive()` method of a Broadcast Receiver.",
    "4. By setting the content in the `onCreate()` method of an Activity."
  ],
  "answer": "1. By using the `setContentTitle()` and `setContentText()` methods of the Notification Builder."
},
{
  "id": 38,
  "title": "Q38. What is a Broadcast Receiver?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. A component that listens for system events and broadcasts them to other apps.",
    "2. A component that handles user input events.",
    "3. A component that manages data storage and retrieval.",
    "4. A component that handles network requests."
  ],
  "answer": "1. A component that listens for system events and broadcasts them to other apps."
},
{
  "id": 39,
  "title": "Q39. How do you register a Broadcast Receiver?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By using the `registerReceiver()` method in your Activity.",
    "2. By declaring the Receiver in the manifest.",
    "3. By using the `startService()` method.",
    "4. By using the `bindService()` method."
  ],
  "answer": "1. By using the `registerReceiver()` method in your Activity."
},
{
  "id": 40,
  "title": "Q40. What is the difference between static and dynamic registration of a Broadcast Receiver?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. Static registration registers the Receiver in the manifest, while dynamic registration registers it in code.",
    "2. Dynamic registration registers the Receiver in the manifest, while static registration registers it in code.",
    "3. Static registration is used for system broadcasts, while dynamic registration is used for app-specific broadcasts.",
    "4. Dynamic registration is used for system broadcasts, while static registration is used for app-specific broadcasts."
  ],
  "answer": "1. Static registration registers the Receiver in the manifest, while dynamic registration registers it in code."
},
{
  "id": 41,
  "title": "Q41. What is the purpose of the `onReceive()` method in a Broadcast Receiver?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To register the Receiver for broadcasts.",
    "2. To handle received broadcasts.",
    "3. To send broadcasts to other apps.",
    "4. To manage the lifecycle of the Receiver."
  ],
  "answer": "2. To handle received broadcasts."
},
{
  "id": 42,
  "title": "Q42. How do you unregister a Broadcast Receiver?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By calling the `unregisterReceiver()` method in your Activity.",
    "2. By removing the Receiver declaration from the manifest.",
    "3. By using the `stopService()` method.",
    "4. By using the `unbindService()` method."
  ],
  "answer": "1. By calling the `unregisterReceiver()` method in your Activity."
},
{
  "id": 43,
  "title": "Q43. What is the purpose of the `sendBroadcast()` method?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To register a Broadcast Receiver.",
    "2. To send a broadcast to other apps.",
    "3. To handle received broadcasts.",
    "4. To manage the lifecycle of a Broadcast Receiver."
  ],
  "answer": "2. To send a broadcast to other apps."
},
{
  "id": 44,
  "title": "Q44. What is the difference between `sendBroadcast()`, `sendOrderedBroadcast()`, and `sendStickyBroadcast()`?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. `sendBroadcast()` sends a broadcast to all registered receivers, while `sendOrderedBroadcast()` sends a broadcast to receivers in a specific order.",
    "2. `sendOrderedBroadcast()` sends a broadcast to all registered receivers, while `sendBroadcast()` sends a broadcast to receivers in a specific order.",
    "3. `sendStickyBroadcast()` sends a broadcast that remains available to all registered receivers until explicitly removed.",
    "4. All three methods send broadcasts to registered receivers, but with different levels of control and behavior."
  ],
  "answer": "4. All three methods send broadcasts to registered receivers, but with different levels of control and behavior."
},
{
  "id": 45,
  "title": "Q45. What are some common system broadcasts that you can listen to?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. `ACTION_BOOT_COMPLETED`",
    "2. `ACTION_BATTERY_CHANGED`",
    "3. `ACTION_SCREEN_ON`",
    "4. `ACTION_HEADSET_PLUG`",
    "5. All of the above"
  ],
  "answer": "5. All of the above"
},
{
  "id": 46,
  "title": "Q46. How can you create a custom broadcast to communicate between different components of your app?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By creating a new Intent with a custom action and sending it using `sendBroadcast()`.",
    "2. By using a SharedPreferences file to store and retrieve data.",
    "3. By using a database to store and retrieve data.",
    "4. By using a global variable to share data."
  ],
  "answer": "1. By creating a new Intent with a custom action and sending it using `sendBroadcast()`."
},
{
  "id": 47,
  "title": "Q47. What is the best way to handle network connectivity changes in an Android app?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By using the `NetworkChangeReceiver` class.",
    "2. By listening for the `ACTION_BATTERY_CHANGED` broadcast.",
    "3. By polling the network status periodically.",
    "4. By using a background service to monitor network connectivity."
  ],
  "answer": "1. By using the `NetworkChangeReceiver` class."
},
{
  "id": 48,
  "title": "Q48.  What does the following code do in Jetpack Compose? \n\n```kotlin\n@Composable\nfun MyComposable() { \n    val context = LocalContext.current\n    val receiver = object : BroadcastReceiver() {\n        override fun onReceive(context: Context?, intent: Intent?) {\n            // Handle the broadcast\n        }\n    }\n    LaunchedEffect(key1 = receiver) { \n        context.registerReceiver(receiver, IntentFilter(\"my_custom_action\"))\n    }\n    // ... other composables\n}\n```",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. Registers a broadcast receiver for a custom action named `my_custom_action`.",
    "2. Sends a broadcast to other apps.",
    "3. Creates a state variable that can be used to control the visibility of a dialog.",
    "4. Launches a new activity."
  ],
  "answer": "1. Registers a broadcast receiver for a custom action named `my_custom_action`."
},
{
  "id": 49,
  "title": "Q49. What is the purpose of the Notification Manager in Android?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To manage data storage and retrieval.",
    "2. To handle user input events.",
    "3. To display notifications to the user.",
    "4. To communicate with other apps on the device."
  ],
  "answer": "3. To display notifications to the user."
},
{
  "id": 50,
  "title": "Q50. How do you get an instance of the Notification Manager in an Activity?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. `NotificationManager manager = new NotificationManager()`",
    "2. `NotificationManager manager = getSystemService(NOTIFICATION_SERVICE)`",
    "3. `NotificationManager manager = getNotificationManager()`",
    "4. `NotificationManager manager = NotificationManager.getInstance()`"
  ],
  "answer": "2. `NotificationManager manager = getSystemService(NOTIFICATION_SERVICE)`"
},
{
  "id": 51,
  "title": "Q51. What is a Notification Channel?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. A way to group related notifications together.",
    "2. A way to define the appearance of a notification.",
    "3. A way to set the priority of a notification.",
    "4. A way to handle user interactions with a notification."
  ],
  "answer": "1. A way to group related notifications together."
},
{
  "id": 52,
  "title": "Q52. How do you create a Notification Channel?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By calling the `createNotificationChannel()` method on the Notification Manager.",
    "2. By declaring the channel in the manifest.",
    "3. By using the `NotificationCompat.Builder` class.",
    "4. By using the `NotificationCompat.Channel` class."
  ],
  "answer": "1. By calling the `createNotificationChannel()` method on the Notification Manager."
},
{
  "id": 53,
  "title": "Q53. What is the purpose of the `NotificationCompat.Builder` class?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To create a Notification Channel.",
    "2. To build a notification object.",
    "3. To display a notification to the user.",
    "4. To handle user interactions with a notification."
  ],
  "answer": "2. To build a notification object."
},
{
  "id": 54,
  "title": "Q54. How do you set the content of a notification?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By using the `setContentTitle()` and `setContentText()` methods of the Notification Builder.",
    "2. By using the `setContent()` method of the Notification Builder.",
    "3. By setting the content in the `onReceive()` method of a Broadcast Receiver.",
    "4. By setting the content in the `onCreate()` method of an Activity."
  ],
  "answer": "1. By using the `setContentTitle()` and `setContentText()` methods of the Notification Builder."
},
{
  "id": 55,
  "title": "Q55. How do you set an icon for a notification?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By using the `setIcon()` method of the Notification Builder.",
    "2. By setting the icon in the manifest.",
    "3. By using the `setSmallIcon()` method of the Notification Builder.",
    "4. By using the `setLargeIcon()` method of the Notification Builder."
  ],
  "answer": "3. By using the `setSmallIcon()` method of the Notification Builder."
},
{
  "id": 56,
  "title": "Q56. How do you create a notification with a custom layout?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By using the `setCustomContentView()` method of the Notification Builder.",
    "2. By using the `setCustomBigContentView()` method of the Notification Builder.",
    "3. By using the `setContent()` method of the Notification Builder and providing a custom view.",
    "4. By using the `setLargeIcon()` method of the Notification Builder and providing a custom image."
  ],
  "answer": "1. By using the `setCustomContentView()` method of the Notification Builder."
},
{
  "id": 57,
  "title": "Q57. How do you set the notification's priority?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By using the `setPriority()` method of the Notification Builder.",
    "2. By using the `setImportance()` method of the Notification Builder.",
    "3. By using the `setCategory()` method of the Notification Builder.",
    "4. By setting the priority in the manifest."
  ],
  "answer": "1. By using the `setPriority()` method of the Notification Builder."
},
{
  "id": 58,
  "title": "Q58. How do you set a notification's sound, vibration, and LED color?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By using the `setSound()` method for sound, `setVibrate()` method for vibration, and `setLights()` method for LED color.",
    "2. By using the `setDefaults()` method of the Notification Builder and specifying the desired flags.",
    "3. By using the `setCategory()` method of the Notification Builder and specifying the desired category.",
    "4. By setting the sound, vibration, and LED color in the manifest."
  ],
  "answer": "1. By using the `setSound()` method for sound, `setVibrate()` method for vibration, and `setLights()` method for LED color."
},
{
  "id": 59,
  "title": "Q59. How do you handle user interactions with a notification, such as clicking on it?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By using the `setContentIntent()` method of the Notification Builder.",
    "2. By using the `setDeleteIntent()` method of the Notification Builder.",
    "3. By using the `setFullScreenIntent()` method of the Notification Builder.",
    "4. By using the `setCategory()` method of the Notification Builder and specifying the desired category."
  ],
  "answer": "1. By using the `setContentIntent()` method of the Notification Builder."
},
{
  "id": 60,
  "title": "Q60. How do you dismiss a notification?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By calling the `cancel()` method on the Notification Manager.",
    "2. By using the `setDeleteIntent()` method of the Notification Builder.",
    "3. By using the `setContentIntent()` method of the Notification Builder and setting a null Intent.",
    "4. By calling the `finish()` method of the Activity."
  ],
  "answer": "1. By calling the `cancel()` method on the Notification Manager."
},
{
  "id": 61,
  "title": "Q61. What does the following code do in Jetpack Compose? \n\n```kotlin\n@Composable\nfun MyComposable() { \n    val context = LocalContext.current\n    val notificationManager = context.getSystemService(NotificationManager::class.java)\n    // ... create notification builder\n    notificationManager.notify(1, notificationBuilder.build())\n}\n```",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. Creates a notification channel.",
    "2. Displays a notification to the user.",
    "3. Registers a broadcast receiver for a custom action.",
    "4. Launches a new activity."
  ],
  "answer": "2. Displays a notification to the user."
},
{
  "id": 62,
  "title": "Q62. What is the purpose of the Alarm Manager in Android?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To manage background processes.",
    "2. To schedule tasks to be executed at specific times or intervals.",
    "3. To handle user input events.",
    "4. To manage data storage and retrieval."
  ],
  "answer": "2. To schedule tasks to be executed at specific times or intervals."
},
{
  "id": 63,
  "title": "Q63. How do you get an instance of the Alarm Manager in an Activity?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. `AlarmManager manager = new AlarmManager()`",
    "2. `AlarmManager manager = getSystemService(ALARM_SERVICE)`",
    "3. `AlarmManager manager = getAlarmManager()`",
    "4. `AlarmManager manager = AlarmManager.getInstance()`"
  ],
  "answer": "2. `AlarmManager manager = getSystemService(ALARM_SERVICE)`"
},
{
  "id": 64,
  "title": "Q64. What are the different types of alarms that you can schedule using the Alarm Manager?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. One-time alarms and repeating alarms",
    "2. Time-based alarms and interval-based alarms",
    "3. System alarms and app-specific alarms",
    "4. All of the above"
  ],
  "answer": "4. All of the above"
},
{
  "id": 65,
  "title": "Q65. How do you schedule a one-time alarm using the Alarm Manager?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By using the `set()` method with the `RTC_WAKEUP` flag.",
    "2. By using the `setRepeating()` method with the `RTC_WAKEUP` flag.",
    "3. By using the `setExact()` method with the `RTC_WAKEUP` flag.",
    "4. By using the `setExactAndAllowWhileIdle()` method with the `RTC_WAKEUP` flag."
  ],
  "answer": "1. By using the `set()` method with the `RTC_WAKEUP` flag."
},
{
  "id": 66,
  "title": "Q66. How do you schedule a repeating alarm using the Alarm Manager?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By using the `setRepeating()` method with the `RTC_WAKEUP` flag.",
    "2. By using the `setExact()` method with the `RTC_WAKEUP` flag.",
    "3. By using the `setExactAndAllowWhileIdle()` method with the `RTC_WAKEUP` flag.",
    "4. By calling the `set()` method multiple times with different trigger times."
  ],
  "answer": "1. By using the `setRepeating()` method with the `RTC_WAKEUP` flag."
},
{
  "id": 67,
  "title": "Q67. How do you cancel an alarm that was previously scheduled?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By calling the `cancel()` method on the Alarm Manager.",
    "2. By using the `set()` method with a null trigger time.",
    "3. By using the `setRepeating()` method with a 0 interval.",
    "4. By calling the `finish()` method of the Activity."
  ],
  "answer": "1. By calling the `cancel()` method on the Alarm Manager."
},
{
  "id": 68,
  "title": "Q68. How do you receive a notification when an alarm triggers?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By registering a Broadcast Receiver for the `ACTION_BOOT_COMPLETED` action.",
    "2. By registering a Broadcast Receiver for the `ACTION_BATTERY_CHANGED` action.",
    "3. By registering a Broadcast Receiver for the `ACTION_TIME_TICK` action.",
    "4. By registering a Broadcast Receiver for the `ACTION_TIME_CHANGED` action."
  ],
  "answer": "3. By registering a Broadcast Receiver for the `ACTION_TIME_TICK` action."
},
{
  "id": 69,
  "title": "Q69. What is the difference between `set()` and `setExact()` in the Alarm Manager?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. `set()` provides an approximate trigger time, while `setExact()` provides a precise trigger time.",
    "2. `setExact()` provides an approximate trigger time, while `set()` provides a precise trigger time.",
    "3. `set()` is used for one-time alarms, while `setExact()` is used for repeating alarms.",
    "4. `setExact()` is used for one-time alarms, while `set()` is used for repeating alarms."
  ],
  "answer": "1. `set()` provides an approximate trigger time, while `setExact()` provides a precise trigger time."
},
{
  "id": 70,
  "title": "Q70. What does the following code do? \n\n```kotlin\nval alarmManager = getSystemService(AlarmManager::class.java)\nval intent = Intent(this, MyReceiver::class.java)\nval pendingIntent = PendingIntent.getBroadcast(this, 0, intent, 0)\nalarmManager.set(AlarmManager.RTC_WAKEUP, triggerTimeInMillis, pendingIntent)\n```",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. Schedules a one-time alarm that will trigger at the specified time.",
    "2. Schedules a repeating alarm that will trigger every specified interval.",
    "3. Registers a broadcast receiver for a custom action.",
    "4. Launches a new activity."
  ],
  "answer": "1. Schedules a one-time alarm that will trigger at the specified time."
},
{
  "id": 71,
  "title": "Q71. What is a Service in Android?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. A component that runs in the background and performs long-running tasks.",
    "2. A component that handles user input events.",
    "3. A component that manages data storage and retrieval.",
    "4. A component that communicates with other apps on the device."
  ],
  "answer": "1. A component that runs in the background and performs long-running tasks."
},
{
  "id": 72,
  "title": "Q72. How do you create a Service?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By extending the `Service` class.",
    "2. By using the `startService()` method.",
    "3. By using the `bindService()` method.",
    "4. By using the `registerReceiver()` method."
  ],
  "answer": "1. By extending the `Service` class."
},
{
  "id": 73,
  "title": "Q73. What are the two main ways to start a Service?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. Using `startService()` and `bindService()`",
    "2. Using `startForegroundService()` and `startService()`",
    "3. Using `bindService()` and `registerReceiver()`",
    "4. Using `startService()` and `registerReceiver()`"
  ],
  "answer": "1. Using `startService()` and `bindService()`"
},
{
  "id": 74,
  "title": "Q74. What is the difference between `startService()` and `bindService()`?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. `startService()` starts a service that runs in the background, while `bindService()` starts a service that is bound to a specific client.",
    "2. `bindService()` starts a service that runs in the background, while `startService()` starts a service that is bound to a specific client.",
    "3. `startService()` starts a service that is used to send broadcasts, while `bindService()` starts a service that is used to handle data.",
    "4. `bindService()` starts a service that is used to send broadcasts, while `startService()` starts a service that is used to handle data."
  ],
  "answer": "1. `startService()` starts a service that runs in the background, while `bindService()` starts a service that is bound to a specific client."
},
{
  "id": 75,
  "title": "Q75. How do you stop a Service that was started using `startService()`?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By calling the `stopService()` method.",
    "2. By calling the `unbindService()` method.",
    "3. By calling the `finish()` method of the Activity.",
    "4. By calling the `unregisterReceiver()` method."
  ],
  "answer": "1. By calling the `stopService()` method."
},
{
  "id": 76,
  "title": "Q76. How do you unbind a Service that was started using `bindService()`?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By calling the `unbindService()` method.",
    "2. By calling the `stopService()` method.",
    "3. By calling the `finish()` method of the Activity.",
    "4. By calling the `unregisterReceiver()` method."
  ],
  "answer": "1. By calling the `unbindService()` method."
},
{
  "id": 77,
  "title": "Q77. What is the purpose of the `onStartCommand()` method in a Service?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To initialize the Service.",
    "2. To handle the Service's starting logic.",
    "3. To handle the Service's binding logic.",
    "4. To handle the Service's stopping logic."
  ],
  "answer": "2. To handle the Service's starting logic."
},
{
  "id": 78,
  "title": "Q78. What is the purpose of the `onBind()` method in a Service?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To initialize the Service.",
    "2. To handle the Service's binding logic.",
    "3. To handle the Service's stopping logic.",
    "4. To handle the Service's starting logic."
  ],
  "answer": "2. To handle the Service's binding logic."
},
{
  "id": 79,
  "title": "Q79. What is the purpose of the `onUnbind()` method in a Service?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To handle the Service's unbinding logic.",
    "2. To handle the Service's stopping logic.",
    "3. To handle the Service's starting logic.",
    "4. To handle the Service's binding logic."
  ],
  "answer": "1. To handle the Service's unbinding logic."
},
{
  "id": 80,
  "title": "Q80. What is the purpose of the `onDestroy()` method in a Service?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To handle the Service's stopping logic.",
    "2. To handle the Service's starting logic.",
    "3. To handle the Service's binding logic.",
    "4. To handle the Service's unbinding logic."
  ],
  "answer": "1. To handle the Service's stopping logic."
},
{
  "id": 81,
  "title": "Q81. What does the following code do? \n\n```kotlin\nval intent = Intent(this, MyService::class.java)\nstartService(intent)\n```",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. Starts a service named `MyService` in the background.",
    "2. Binds a service named `MyService` to the current activity.",
    "3. Registers a broadcast receiver for a custom action.",
    "4. Launches a new activity."
  ],
  "answer": "1. Starts a service named `MyService` in the background."
},
{
  "id": 82,
  "title": "Q82. What are the different ways to store data in an Android app?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. SharedPreferences",
    "2. Internal storage",
    "3. External storage",
    "4. SQLite database",
    "5. Room persistence library",
    "6. All of the above"
  ],
  "answer": "6. All of the above"
},
{
  "id": 83,
  "title": "Q83. What is SharedPreferences used for?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To store small amounts of key-value data.",
    "2. To store large amounts of structured data.",
    "3. To store images and other media files.",
    "4. To store user preferences and settings."
  ],
  "answer": "4. To store user preferences and settings."
},
{
  "id": 84,
  "title": "Q84. How do you access SharedPreferences in an Activity?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. `SharedPreferences prefs = getSharedPreferences('my_prefs', MODE_PRIVATE)`",
    "2. `SharedPreferences prefs = getSharedPreferences('my_prefs', MODE_WORLD_READABLE)`",
    "3. `SharedPreferences prefs = getSharedPreferences('my_prefs', MODE_WORLD_WRITEABLE)`",
    "4. `SharedPreferences prefs = SharedPreferences.getInstance('my_prefs')`",
  ],
  "answer": "1. `SharedPreferences prefs = getSharedPreferences('my_prefs', MODE_PRIVATE)`"
},
{
  "id": 85,
  "title": "Q85. How do you store a value in SharedPreferences?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. `prefs.putString('key', 'value')`",
    "2. `prefs.put('key', 'value')`",
    "3. `prefs.setValue('key', 'value')`",
    "4. `prefs.setData('key', 'value')`",
  ],
  "answer": "1. `prefs.putString('key', 'value')`"
},
{
  "id": 86,
  "title": "Q86. How do you retrieve a value from SharedPreferences?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. `String value = prefs.getString('key', null)`",
    "2. `String value = prefs.get('key')`",
    "3. `String value = prefs.getValue('key')`",
    "4. `String value = prefs.getData('key')`",
  ],
  "answer": "1. `String value = prefs.getString('key', null)`"
},
{
  "id": 87,
  "title": "Q87. What is Internal storage used for?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To store private app data that is only accessible by the app itself.",
    "2. To store public app data that is accessible by other apps.",
    "3. To store images and other media files.",
    "4. To store user preferences and settings."
  ],
  "answer": "1. To store private app data that is only accessible by the app itself."
},
{
  "id": 88,
  "title": "Q88. How do you access Internal storage in an Activity?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. `File file = getFilesDir()`",
    "2. `File file = getExternalFilesDir(null)`",
    "3. `File file = getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS)`",
    "4. `File file = File.createTempFile('temp', '.txt')`",
  ],
  "answer": "1. `File file = getFilesDir()`"
},
{
  "id": 89,
  "title": "Q89. What is External storage used for?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To store public app data that is accessible by other apps.",
    "2. To store private app data that is only accessible by the app itself.",
    "3. To store images and other media files.",
    "4. To store user preferences and settings."
  ],
  "answer": "1. To store public app data that is accessible by other apps."
},
{
  "id": 90,
  "title": "Q90. How do you access External storage in an Activity?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. `File file = getExternalFilesDir(null)`",
    "2. `File file = getFilesDir()`",
    "3. `File file = getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS)`",
    "4. `File file = File.createTempFile('temp', '.txt')`",
  ],
  "answer": "1. `File file = getExternalFilesDir(null)`"
},
{
  "id": 91,
  "title": "Q91. What is SQLite used for?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To store structured data in a relational database.",
    "2. To store small amounts of key-value data.",
    "3. To store images and other media files.",
    "4. To store user preferences and settings."
  ],
  "answer": "1. To store structured data in a relational database."
},
{
  "id": 92,
  "title": "Q92. What is Room persistence library used for?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To provide an abstraction layer over SQLite, making it easier to work with databases.",
    "2. To store small amounts of key-value data.",
    "3. To store images and other media files.",
    "4. To store user preferences and settings."
  ],
  "answer": "1. To provide an abstraction layer over SQLite, making it easier to work with databases."
},
{
  "id": 93,
  "title": "Q93. What does the following code do? \n\n```kotlin\nval prefs = getSharedPreferences('my_prefs', MODE_PRIVATE)\nval editor = prefs.edit()\neditor.putString('username', 'John Doe')\neditor.apply()\n```",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. Stores a username in SharedPreferences.",
    "2. Retrieves a username from SharedPreferences.",
    "3. Clears all data from SharedPreferences.",
    "4. Creates a new database."
  ],
  "answer": "1. Stores a username in SharedPreferences."
},

{
  "id": 95,
  "title": "Q95. What are the common ways to perform network communication in an Android app?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. Using `HttpURLConnection`",
    "2. Using `OkHttp`",
    "3. Using Retrofit",
    "4. Using Volley",
    "5. All of the above"
  ],
  "answer": "5. All of the above"
},
{
  "id": 96,
  "title": "Q96. What is `HttpURLConnection` used for?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To perform HTTP requests.",
    "2. To store user preferences and settings.",
    "3. To manage the lifecycle of an Activity.",
    "4. To handle user input events."
  ],
  "answer": "1. To perform HTTP requests."
},
{
  "id": 97,
  "title": "Q97. What are the advantages of using `OkHttp` over `HttpURLConnection`?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. `OkHttp` is more efficient and provides features like caching and connection pooling.",
    "2. `OkHttp` is simpler to use and requires less code.",
    "3. `OkHttp` is more secure and provides built-in support for HTTPS.",
    "4. All of the above"
  ],
  "answer": "4. All of the above"
},
{
  "id": 98,
  "title": "Q98. What is Retrofit used for?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To make it easier to perform network requests by providing an abstraction layer over HTTP.",
    "2. To store user preferences and settings.",
    "3. To manage the lifecycle of an Activity.",
    "4. To handle user input events."
  ],
  "answer": "1. To make it easier to perform network requests by providing an abstraction layer over HTTP."
},
{
  "id": 99,
  "title": "Q99. What is Volley used for?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To perform network requests.",
    "2. To store user preferences and settings.",
    "3. To manage the lifecycle of an Activity.",
    "4. To handle user input events."
  ],
  "answer": "1. To perform network requests."
},
{
  "id": 100,
  "title": "Q100. What does the following code do? \n\n```kotlin\nval client = OkHttpClient()\nval request = Request.Builder().url(\"https://www.google.com\").build()\nval response = client.newCall(request).execute()\n```",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. Performs an HTTP request to the Google website.",
    "2. Stores a username in SharedPreferences.",
    "3. Creates a new database.",
    "4. Launches a new activity."
  ],
  "answer": "1. Performs an HTTP request to the Google website."
},
{
  "id": 101,
  "title": "Q101. What is the purpose of permissions in Android?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To control access to sensitive user data and device resources.",
    "2. To manage the lifecycle of an Activity.",
    "3. To handle user input events.",
    "4. To communicate with other apps on the device."
  ],
  "answer": "1. To control access to sensitive user data and device resources."
},
{
  "id": 102,
  "title": "Q102. How do you request permissions from the user in an Android app?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By using the `requestPermissions()` method.",
    "2. By declaring the required permissions in the manifest.",
    "3. By using the `startService()` method.",
    "4. By using the `bindService()` method."
  ],
  "answer": "1. By using the `requestPermissions()` method."
},
{
  "id": 103,
  "title": "Q103. What are the different types of permissions in Android?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. Normal permissions and dangerous permissions.",
    "2. System permissions and app-specific permissions.",
    "3. Read permissions and write permissions.",
    "4. All of the above."
  ],
  "answer": "1. Normal permissions and dangerous permissions."
},
{
  "id": 104,
  "title": "Q104. What is the difference between normal permissions and dangerous permissions?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. Normal permissions are granted automatically, while dangerous permissions require user approval.",
    "2. Dangerous permissions are granted automatically, while normal permissions require user approval.",
    "3. Normal permissions are used for accessing system resources, while dangerous permissions are used for accessing user data.",
    "4. Dangerous permissions are used for accessing system resources, while normal permissions are used for accessing user data."
  ],
  "answer": "1. Normal permissions are granted automatically, while dangerous permissions require user approval."
},
{
  "id": 105,
  "title": "Q105. How can you check if a permission has been granted in your app?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By using the `checkSelfPermission()` method.",
    "2. By using the `isPermissionGranted()` method.",
    "3. By using the `requestPermissions()` method and checking the result.",
    "4. By using the `getPackageManager()` method and querying for permissions."
  ],
  "answer": "1. By using the `checkSelfPermission()` method."
},
{
  "id": 106,
  "title": "Q106. What happens if a user denies a permission request?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. The app can continue to function normally, but with limited functionality.",
    "2. The app will crash.",
    "3. The user will be prompted again to grant the permission.",
    "4. The app will be removed from the device."
  ],
  "answer": "1. The app can continue to function normally, but with limited functionality."
},
{
  "id": 107,
  "title": "Q107. How can you handle permission requests in Jetpack Compose?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By using the `remember` function to store the permission status in a state variable.",
    "2. By using the `mutableStateOf` function to create a mutable state for the permission status.",
    "3. By using the `LaunchedEffect` composable to request the permission and update the state variable.",
    "4. All of the above."
  ],
  "answer": "4. All of the above."
},
{
  "id": 108,
  "title": "Q108. What does the following code do? \n\n```kotlin\nval permissionStatus = remember { mutableStateOf(PermissionStatus.Unknown) }\nLaunchedEffect(key1 = Unit) { \n    permissionStatus.value = if (ContextCompat.checkSelfPermission(context, Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED) { \n        PermissionStatus.Granted \n    } else { \n        PermissionStatus.Denied \n    }\n}\n```",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. Checks if the ACCESS_FINE_LOCATION permission is granted and updates the `permissionStatus` state variable accordingly.",
    "2. Requests the ACCESS_FINE_LOCATION permission from the user.",
    "3. Handles the permission request result and updates the `permissionStatus` state variable accordingly.",
    "4. All of the above."
  ],
  "answer": "1. Checks if the ACCESS_FINE_LOCATION permission is granted and updates the `permissionStatus` state variable accordingly."
},
{
  "id": 109,
  "title": "Q109. What are some ways to perform background tasks in Android?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. Using Services",
    "2. Using WorkManager",
    "3. Using Broadcast Receivers",
    "4. Using JobScheduler",
    "5. All of the above"
  ],
  "answer": "5. All of the above"
},
{
  "id": 110,
  "title": "Q110. What are the advantages of using WorkManager over Services for background tasks?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. WorkManager is more robust and handles battery optimization and device constraints.",
    "2. WorkManager is easier to use and requires less code.",
    "3. WorkManager is more efficient and uses less battery.",
    "4. All of the above"
  ],
  "answer": "4. All of the above"
},
{
  "id": 111,
  "title": "Q111. What is the purpose of the `WorkRequest` class in WorkManager?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To define a specific background task that needs to be performed.",
    "2. To schedule a background task to be executed at a specific time or interval.",
    "3. To handle the results of a background task.",
    "4. All of the above"
  ],
  "answer": "4. All of the above"
},
{
  "id": 112,
  "title": "Q112. What are the different types of WorkRequest classes in WorkManager?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. `OneTimeWorkRequest` and `PeriodicWorkRequest`",
    "2. `SyncWorkRequest` and `AsyncWorkRequest`",
    "3. `ForegroundWorkRequest` and `BackgroundWorkRequest`",
    "4. All of the above"
  ],
  "answer": "1. `OneTimeWorkRequest` and `PeriodicWorkRequest`",
},
{
  "id": 113,
  "title": "Q113. How do you schedule a background task using WorkManager?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By using the `enqueue()` method of the `WorkManager` class.",
    "2. By using the `startService()` method with a `WorkRequest` intent.",
    "3. By using the `bindService()` method with a `WorkRequest` intent.",
    "4. By using the `registerReceiver()` method for the `ACTION_BOOT_COMPLETED` action."
  ],
  "answer": "1. By using the `enqueue()` method of the `WorkManager` class."
},
{
  "id": 114,
  "title": "Q114. How do you cancel a WorkRequest that was previously scheduled?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By using the `cancelWorkById()` method of the `WorkManager` class.",
    "2. By using the `stopService()` method.",
    "3. By using the `unbindService()` method.",
    "4. By using the `unregisterReceiver()` method."
  ],
  "answer": "1. By using the `cancelWorkById()` method of the `WorkManager` class."
},
{
  "id": 115,
  "title": "Q115. What are some scenarios where you would use WorkManager?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. Downloading files in the background.",
    "2. Syncing data with a server.",
    "3. Uploading images to a cloud service.",
    "4. Performing periodic tasks, like sending reminders.",
    "5. All of the above"
  ],
  "answer": "5. All of the above"
},
{
  "id": 116,
  "title": "Q116. What does the following code do? \n\n```kotlin\nval workRequest = OneTimeWorkRequest.Builder(MyWorker::class.java).build()\nWorkManager.getInstance(context).enqueue(workRequest)\n```",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. Schedules a one-time background task using WorkManager.",
    "2. Starts a service named `MyService` in the background.",
    "3. Registers a broadcast receiver for a custom action.",
    "4. Launches a new activity."
  ],
  "answer": "1. Schedules a one-time background task using WorkManager."
},
{
  "id": 127,
  "title": "Q127. What are the different ways to perform multithreading in Android?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. Using Threads",
    "2. Using AsyncTask",
    "3. Using HandlerThread",
    "4. Using Kotlin Coroutines",
    "5. All of the above"
  ],
  "answer": "5. All of the above"
},
{
  "id": 128,
  "title": "Q128. What are the advantages of using Kotlin Coroutines over Threads for multithreading?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. Coroutines are more lightweight and efficient.",
    "2. Coroutines are easier to use and provide a more structured way to handle asynchronous operations.",
    "3. Coroutines integrate seamlessly with Jetpack Compose.",
    "4. All of the above"
  ],
  "answer": "4. All of the above"
},
{
  "id": 129,
  "title": "Q129. What is the purpose of the `CoroutineScope` class in Kotlin Coroutines?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To define the scope of a coroutine.",
    "2. To launch and manage coroutines.",
    "3. To handle the results of coroutines.",
    "4. All of the above"
  ],
  "answer": "4. All of the above"
},
{
  "id": 130,
  "title": "Q130. What are the different ways to launch a coroutine in Kotlin?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. Using the `launch()` function.",
    "2. Using the `async()` function.",
    "3. Using the `withContext()` function.",
    "4. All of the above"
  ],
  "answer": "4. All of the above"
},
{
  "id": 131,
  "title": "Q131. What is the difference between the `launch()` and `async()` functions in Kotlin Coroutines?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. `launch()` launches a coroutine that runs in the background, while `async()` launches a coroutine that returns a result.",
    "2. `async()` launches a coroutine that runs in the background, while `launch()` launches a coroutine that returns a result.",
    "3. `launch()` is used for one-time operations, while `async()` is used for repeating operations.",
    "4. `async()` is used for one-time operations, while `launch()` is used for repeating operations."
  ],
  "answer": "1. `launch()` launches a coroutine that runs in the background, while `async()` launches a coroutine that returns a result."
},
{
  "id": 132,
  "title": "Q132. How do you handle the result of a coroutine launched using the `async()` function?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By using the `await()` function.",
    "2. By using the `join()` function.",
    "3. By using the `getResult()` function.",
    "4. By using the `getReturnValue()` function."
  ],
  "answer": "1. By using the `await()` function."
},
{
  "id": 133,
  "title": "Q133. How can you cancel a coroutine in Kotlin?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. By using the `cancel()` function.",
    "2. By using the `stop()` function.",
    "3. By using the `finish()` function.",
    "4. By using the `interrupt()` function."
  ],
  "answer": "1. By using the `cancel()` function."
},
{
  "id": 134,
  "title": "Q134. What does the following code do? \n\n```kotlin\nval scope = CoroutineScope(Dispatchers.IO)\nscope.launch { \n    // Perform a long-running network request \n}\n```",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. Launches a coroutine that runs on the I/O dispatcher, suitable for network requests.",
    "2. Launches a coroutine that runs on the main dispatcher, suitable for updating the UI.",
    "3. Launches a coroutine that runs on the default dispatcher, suitable for general tasks.",
    "4. Launches a coroutine that runs in a background thread."
  ],
  "answer": "1. Launches a coroutine that runs on the I/O dispatcher, suitable for network requests."
},
{
  "id": 135,
  "title": "Q135. What is the purpose of the `AndroidManifest.xml` file?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To define the structure and components of an Android app.",
    "2. To store user preferences and settings.",
    "3. To manage the lifecycle of an Activity.",
    "4. To handle user input events."
  ],
  "answer": "1. To define the structure and components of an Android app."
},
{
  "id": 136,
  "title": "Q136. What is the purpose of the `res` directory in an Android project?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To store resources like images, layouts, strings, and colors.",
    "2. To store source code files.",
    "3. To store build configuration files.",
    "4. To store test code files."
  ],
  "answer": "1. To store resources like images, layouts, strings, and colors."
},
{
  "id": 137,
  "title": "Q137. What is the purpose of the `build.gradle` file in an Android project?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To define build dependencies and configuration options.",
    "2. To store source code files.",
    "3. To store resources like images, layouts, strings, and colors.",
    "4. To store test code files."
  ],
  "answer": "1. To define build dependencies and configuration options."
},
{
  "id": 138,
  "title": "Q138. What is the difference between `debug` and `release` builds in Android?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. `debug` builds are for development and testing, while `release` builds are for distribution.",
    "2. `release` builds are for development and testing, while `debug` builds are for distribution.",
    "3. `debug` builds are for internal use, while `release` builds are for public use.",
    "4. `release` builds are for internal use, while `debug` builds are for public use."
  ],
  "answer": "1. `debug` builds are for development and testing, while `release` builds are for distribution."
},
{
  "id": 139,
  "title": "Q139. What is the purpose of the `Android SDK Manager`?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To manage the different versions of the Android SDK and tools.",
    "2. To build and run Android apps.",
    "3. To debug Android apps.",
    "4. To create new Android projects."
  ],
  "answer": "1. To manage the different versions of the Android SDK and tools."
},
{
  "id": 140,
  "title": "Q140. What is the purpose of the `Android Virtual Device (AVD)`?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To emulate different Android devices and versions.",
    "2. To manage the different versions of the Android SDK and tools.",
    "3. To build and run Android apps.",
    "4. To debug Android apps."
  ],
  "answer": "1. To emulate different Android devices and versions."
},
{
  "id": 141,
  "title": "Q141. What is the purpose of the `Android Debug Bridge (ADB)`?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To communicate with an Android device or emulator.",
    "2. To manage the different versions of the Android SDK and tools.",
    "3. To build and run Android apps.",
    "4. To debug Android apps."
  ],
  "answer": "1. To communicate with an Android device or emulator."
},
{
  "id": 142,
  "title": "Q142. What is the purpose of the `Android Studio`?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To develop and debug Android apps.",
    "2. To manage the different versions of the Android SDK and tools.",
    "3. To build and run Android apps.",
    "4. To create new Android projects."
  ],
  "answer": "1. To develop and debug Android apps."
},
{
  "id": 143,
  "title": "Q143. What is the purpose of the `Gradle` build system?",
  "text": undefined,
  "code2": undefined,
  "choices": [
    "1. To automate the build process for Android apps.",
    "2. To manage the different versions of the Android SDK and tools.",
    "3. To build and run Android apps.",
    "4. To debug Android apps."
  ],
  "answer": "1. To automate the build process for Android apps."
},

  {
    "id": 144,
    "title": "Q144. What does the following code snippet do?",
    "text": undefined,
    "code2": "val intent = Intent(this, SecondActivity::class.java)<br>startActivity(intent)",
    "choices": [
      "1. Starts a new activity called SecondActivity.",
      "2. Finishes the current activity.",
      "3. Registers a broadcast receiver.",
      "4. Creates a new service."
    ],
    "answer": "1. Starts a new activity called SecondActivity."
  },
  {
    "id": 145,
    "title": "Q145. What does the following code snippet do?",
    "text": undefined,
    "code2": "val intent = Intent(this, SecondActivity::class.java)<br>intent.putExtra(\"name\", \"John Doe\")<br>startActivity(intent)",
    "choices": [
      "1. Starts a new activity called SecondActivity and passes a string extra named \"name\" with the value \"John Doe\".",
      "2. Starts a new activity called SecondActivity and passes an integer extra named \"name\" with the value \"John Doe\".",
      "3. Starts a new activity called SecondActivity and sets the activity's title to \"John Doe\".",
      "4. Starts a new activity called SecondActivity and displays a toast message with the text \"John Doe\"."
    ],
    "answer": "1. Starts a new activity called SecondActivity and passes a string extra named \"name\" with the value \"John Doe\"."
  },
  {
    "id": 146,
    "title": "Q146. What does the following code snippet do?",
    "text": undefined,
    "code2": "override fun onCreate(savedInstanceState: Bundle?) {<br>super.onCreate(savedInstanceState)<br>setContentView(R.layout.activity_main)<br>val name = intent.getStringExtra(\"name\")<br>if (name != null) {<br>textView.text = \"Welcome, $name!\"<br>}",
    "choices": [
      "1. Retrieves a string extra named \"name\" from the Intent and displays it in a TextView.",
      "2. Retrieves an integer extra named \"name\" from the Intent and displays it in a TextView.",
      "3. Sets the activity's title to \"Welcome, John Doe!\"",
      "4. Displays a toast message with the text \"Welcome, John Doe!\"."
    ],
    "answer": "1. Retrieves a string extra named \"name\" from the Intent and displays it in a TextView."
  },
  {
    "id": 147,
    "title": "Q147. What does the following code snippet do?",
    "text": undefined,
    "code2": "override fun onPause() {<br>super.onPause()<br>saveState() // Save data to SharedPreferences or other storage",
    "choices": [
      "1. Saves the current state of the activity before it's paused.",
      "2. Restores the saved state of the activity when it's resumed.",
      "3. Starts a new activity.",
      "4. Finishes the current activity."
    ],
    "answer": "1. Saves the current state of the activity before it's paused."
  },
  {
    "id": 148,
    "title": "Q148. What does the following code snippet do?",
    "text": undefined,
    "code2": "override fun onResume() {<br>super.onResume()<br>restoreState() // Restore data from SharedPreferences or other storage",
    "choices": [
      "1. Restores the saved state of the activity when it's resumed.",
      "2. Saves the current state of the activity before it's paused.",
      "3. Starts a new activity.",
      "4. Finishes the current activity."
    ],
    "answer": "1. Restores the saved state of the activity when it's resumed."
  },
  {
    "id": 149,
    "title": "Q149. What does the following code snippet do?",
    "text": undefined,
    "code2": "val intent = Intent(ACTION_VIEW, Uri.parse(\"https://www.google.com\"))<br>startActivity(intent)",
    "choices": [
      "1. Opens a web page in a web browser.",
      "2. Sends an email.",
      "3. Makes a phone call.",
      "4. Sends a text message."
    ],
    "answer": "1. Opens a web page in a web browser."
  },
  {
    "id": 150,
    "title": "Q150. What does the following code snippet do?",
    "text": undefined,
    "code2": "val intent = Intent(ACTION_SENDTO, Uri.parse(\"smsto:1234567890\"))<br>intent.putExtra(\"sms_body\", \"Hello from Android!\")<br>startActivity(intent)",
    "choices": [
      "1. Sends a text message to the number 1234567890.",
      "2. Opens a web page in a web browser.",
      "3. Makes a phone call.",
      "4. Sends an email."
    ],
    "answer": "1. Sends a text message to the number 1234567890."
  },
  {
    "id": 151,
    "title": "Q151. What does the following code snippet do?",
    "text": undefined,
    "code2": "val intent = Intent(ACTION_DIAL, Uri.parse(\"tel:1234567890\"))<br>startActivity(intent)",
    "choices": [
      "1. Opens the dialer app and pre-fills the number 1234567890.",
      "2. Makes a phone call to the number 1234567890.",
      "3. Sends a text message to the number 1234567890.",
      "4. Opens a web page in a web browser."
    ],
    "answer": "1. Opens the dialer app and pre-fills the number 1234567890."
  },
  {
    "id": 152,
    "title": "Q152. What does the following code snippet do?",
    "text": undefined,
    "code2": "val intent = Intent(ACTION_SEND)<br>intent.type = \"text/plain\"<br>intent.putExtra(Intent.EXTRA_TEXT, \"Share this text!\")<br>startActivity(Intent.createChooser(intent, \"Share with:\"))",
    "choices": [
      "1. Allows the user to share a text message using their preferred app.",
      "2. Sends a text message to a specific contact.",
      "3. Opens a web page in a web browser.",
      "4. Makes a phone call."
    ],
    "answer": "1. Allows the user to share a text message using their preferred app."
  },
  {
    "id": 153,
    "title": "Q153. What does the following code snippet do?",
    "text": undefined,
    "code2": "val receiver = object : BroadcastReceiver() {<br>override fun onReceive(context: Context?, intent: Intent?) {<br>// Handle the broadcast<br>}",
    "choices": [
      "1. Defines a BroadcastReceiver that will handle broadcasts.",
      "2. Registers a BroadcastReceiver.",
      "3. Sends a broadcast to other apps.",
      "4. Creates a new service."
    ],
    "answer": "1. Defines a BroadcastReceiver that will handle broadcasts."
  },
  {
    "id": 154,
    "title": "Q154. What does the following code snippet do?",
    "text": undefined,
    "code2": "val intentFilter = IntentFilter(\"android.net.conn.CONNECTIVITY_CHANGE\")<br>registerReceiver(receiver, intentFilter)",
    "choices": [
      "1. Registers a BroadcastReceiver to listen for network connectivity changes.",
      "2. Registers a BroadcastReceiver to listen for battery changes.",
      "3. Registers a BroadcastReceiver to listen for time changes.",
      "4. Registers a BroadcastReceiver to listen for boot completed event."
    ],
    "answer": "1. Registers a BroadcastReceiver to listen for network connectivity changes."
  },
  {
    "id": 155,
    "title": "Q155. What does the following code snippet do?",
    "text": undefined,
    "code2": "val notificationManager = getSystemService(NotificationManager::class.java)<br>val channel = NotificationChannel(\"my_channel_id\", \"My Channel Name\", NotificationManager.IMPORTANCE_DEFAULT)<br>notificationManager.createNotificationChannel(channel)",
    "choices": [
      "1. Creates a notification channel.",
      "2. Builds a notification.",
      "3. Displays a notification.",
      "4. Cancels a notification."
    ],
    "answer": "1. Creates a notification channel."
  },
  {
    "id": 156,
    "title": "Q156. What does the following code snippet do?",
    "text": undefined,
    "code2": "val notificationBuilder = NotificationCompat.Builder(this, \"my_channel_id\")<br>.setContentTitle(\"My Notification\")<br>.setContentText(\"This is a test notification.\")<br>.setSmallIcon(R.drawable.ic_notification)<br>val notification = notificationBuilder.build()<br>notificationManager.notify(1, notification)",
    "choices": [
      "1. Builds a notification and displays it.",
      "2. Creates a notification channel.",
      "3. Cancels a notification.",
      "4. Registers a BroadcastReceiver."
    ],
    "answer": "1. Builds a notification and displays it."
  },
  {
    "id": 157,
    "title": "Q157. What does the following code snippet do?",
    "text": undefined,
    "code2": "val pendingIntent = PendingIntent.getActivity(this, 0, Intent(this, SecondActivity::class.java), 0)<br>notificationBuilder.setContentIntent(pendingIntent)",
    "choices": [
      "1. Sets an intent to be triggered when the notification is clicked.",
      "2. Sets an intent to be triggered when the notification is dismissed.",
      "3. Sets an intent to be triggered when the notification is created.",
      "4. Sets an intent to be triggered when the notification is updated."
    ],
    "answer": "1. Sets an intent to be triggered when the notification is clicked."
  },
  {
    "id": 158,
    "title": "Q158. What does the following code snippet do?",
    "text": undefined,
    "code2": "val alarmManager = getSystemService(AlarmManager::class.java)<br>val intent = Intent(this, MyReceiver::class.java)<br>val pendingIntent = PendingIntent.getBroadcast(this, 0, intent, 0)<br>alarmManager.set(AlarmManager.RTC_WAKEUP, triggerTimeInMillis, pendingIntent)",
    "choices": [
      "1. Schedules a one-time alarm to trigger at the specified time.",
      "2. Schedules a repeating alarm to trigger at regular intervals.",
      "3. Cancels a previously scheduled alarm.",
      "4. Starts a new service."
    ],
    "answer": "1. Schedules a one-time alarm to trigger at the specified time."
  },
  {
    "id": 159,
    "title": "Q159. What does the following code snippet do?",
    "text": undefined,
    "code2": "val alarmManager = getSystemService(AlarmManager::class.java)<br>val intent = Intent(this, MyReceiver::class.java)<br>val pendingIntent = PendingIntent.getBroadcast(this, 0, intent, 0)<br>alarmManager.setRepeating(AlarmManager.RTC_WAKEUP, triggerTimeInMillis, intervalInMillis, pendingIntent)",
    "choices": [
      "1. Schedules a repeating alarm to trigger at regular intervals.",
      "2. Schedules a one-time alarm to trigger at the specified time.",
      "3. Cancels a previously scheduled alarm.",
      "4. Starts a new service."
    ],
    "answer": "1. Schedules a repeating alarm to trigger at regular intervals."
  },
  {
    "id": 160,
    "title": "Q160. What does the following code snippet do?",
    "text": undefined,
    "code2": "alarmManager.cancel(pendingIntent)",
    "choices": [
      "1. Cancels a previously scheduled alarm.",
      "2. Schedules a one-time alarm to trigger at the specified time.",
      "3. Schedules a repeating alarm to trigger at regular intervals.",
      "4. Starts a new service."
    ],
    "answer": "1. Cancels a previously scheduled alarm."
  },
  {
    "id": 161,
    "title": "Q161. What does the following code snippet do?",
    "text": undefined,
    "code2": "val intent = Intent(this, MyService::class.java)<br>startService(intent)",
    "choices": [
      "1. Starts a service in the background.",
      "2. Binds a service to the current activity.",
      "3. Creates a new service.",
      "4. Stops a running service."
    ],
    "answer": "1. Starts a service in the background."
  },
  {
    "id": 162,
    "title": "Q162. What does the following code snippet do?",
    "text": undefined,
    "code2": "val intent = Intent(this, MyService::class.java)<br>bindService(intent, connection, BIND_AUTO_CREATE)",
    "choices": [
      "1. Binds a service to the current activity.",
      "2. Starts a service in the background.",
      "3. Creates a new service.",
      "4. Stops a running service."
    ],
    "answer": "1. Binds a service to the current activity."
  },
  {
    "id": 163,
    "title": "Q163. What does the following code snippet do?",
    "text": undefined,
    "code2": "override fun onBind(intent: Intent?): IBinder? {<br>return MyBinder()",
    "choices": [
      "1. Returns an IBinder object to allow clients to interact with the service.",
      "2. Starts the service in the background.",
      "3. Binds the service to the current activity.",
      "4. Stops a running service."
    ],
    "answer": "1. Returns an IBinder object to allow clients to interact with the service."
  },
  {
    "id": 164,
    "title": "Q164. What does the following code snippet do?",
    "text": undefined,
    "code2": "unbindService(connection)",
    "choices": [
      "1. Unbinds the service from the current activity.",
      "2. Stops a running service.",
      "3. Starts a service in the background.",
      "4. Binds a service to the current activity."
    ],
    "answer": "1. Unbinds the service from the current activity."
  },
  {
    "id": 165,
    "title": "Q165. What does the following code snippet do?",
    "text": undefined,
    "code2": "stopService(intent)",
    "choices": [
      "1. Stops a running service.",
      "2. Unbinds the service from the current activity.",
      "3. Starts a service in the background.",
      "4. Binds a service to the current activity."
    ],
    "answer": "1. Stops a running service."
  },
  {
    "id": 166,
    "title": "Q166. What does the following code snippet do?",
    "text": undefined,
    "code2": "val prefs = getSharedPreferences(\"my_prefs\", MODE_PRIVATE)",
    "choices": [
      "1. Gets an instance of SharedPreferences.",
      "2. Saves data to SharedPreferences.",
      "3. Retrieves data from SharedPreferences.",
      "4. Creates a new database."
    ],
    "answer": "1. Gets an instance of SharedPreferences."
  },
  {
    "id": 167,
    "title": "Q167. What does the following code snippet do?",
    "text": undefined,
    "code2": "val editor = prefs.edit()<br>editor.putString(\"username\", \"John Doe\")<br>editor.apply()",
    "choices": [
      "1. Saves a username to SharedPreferences.",
      "2. Retrieves a username from SharedPreferences.",
      "3. Gets an instance of SharedPreferences.",
      "4. Creates a new database."
    ],
    "answer": "1. Saves a username to SharedPreferences."
  },
  {
    "id": 168,
    "title": "Q168. What does the following code snippet do?",
    "text": undefined,
    "code2": "val username = prefs.getString(\"username\", null)",
    "choices": [
      "1. Retrieves a username from SharedPreferences.",
      "2. Saves a username to SharedPreferences.",
      "3. Gets an instance of SharedPreferences.",
      "4. Creates a new database."
    ],
    "answer": "1. Retrieves a username from SharedPreferences."
  },
  {
    "id": 169,
    "title": "Q169. What does the following code snippet do?",
    "text": undefined,
    "code2": "val file = File(filesDir, \"my_file.txt\")",
    "choices": [
      "1. Creates a file in Internal storage.",
      "2. Creates a file in External storage.",
      "3. Reads data from a file.",
      "4. Writes data to a file."
    ],
    "answer": "1. Creates a file in Internal storage."
  },
  {
    "id": 170,
    "title": "Q170. What does the following code snippet do?",
    "text": undefined,
    "code2": "val outputStream = FileOutputStream(file)<br>outputStream.write(\"Hello, World!\".toByteArray())<br>outputStream.close()",
    "choices": [
      "1. Writes data to a file.",
      "2. Creates a file in Internal storage.",
      "3. Creates a file in External storage.",
      "4. Reads data from a file."
    ],
    "answer": "1. Writes data to a file."
  },
  {
    "id": 171,
    "title": "Q171. What does the following code snippet do?",
    "text": undefined,
    "code2": "val inputStream = FileInputStream(file)<br>val content = inputStream.bufferedReader().use { it.readText() }<br>inputStream.close()",
    "choices": [
      "1. Reads data from a file.",
      "2. Creates a file in Internal storage.",
      "3. Creates a file in External storage.",
      "4. Writes data to a file."
    ],
    "answer": "1. Reads data from a file."
  },
  {
    "id": 172,
    "title": "Q172. What does the following code snippet do?",
    "text": undefined,
    "code2": "val file = File(getExternalFilesDir(null), \"my_file.txt\")",
    "choices": [
      "1. Creates a file in External storage.",
      "2. Creates a file in Internal storage.",
      "3. Reads data from a file.",
      "4. Writes data to a file."
    ],
    "answer": "1. Creates a file in External storage."
  },
  {
    "id": 173,
    "title": "Q173. What does the following code snippet do?",
    "text": undefined,
    "code2": "val db = openOrCreateDatabase(\"mydatabase.db\", MODE_PRIVATE, null)",
    "choices": [
      "1. Opens an existing SQLite database or creates a new one.",
      "2. Creates a new database in Internal storage.",
      "3. Creates a new database in External storage.",
      "4. Saves data to SharedPreferences."
    ],
    "answer": "1. Opens an existing SQLite database or creates a new one."
  },
  {
    "id": 174,
    "title": "Q174. What does the following code snippet do?",
    "text": undefined,
    "code2": "val sql = \"CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT)\"<br>db.execSQL(sql)",
    "choices": [
      "1. Creates a table in the SQLite database.",
      "2. Inserts data into a table.",
      "3. Queries data from a table.",
      "4. Updates data in a table."
    ],
    "answer": "1. Creates a table in the SQLite database."
  },
  {
    "id": 175,
    "title": "Q175. What does the following code snippet do?",
    "text": undefined,
    "code2": "val sql = \"INSERT INTO users (username) VALUES ('John Doe')\"<br>db.execSQL(sql)",
    "choices": [
      "1. Inserts data into a table.",
      "2. Creates a table in the SQLite database.",
      "3. Queries data from a table.",
      "4. Updates data in a table."
    ],
    "answer": "1. Inserts data into a table."
  },
  {
    "id": 176,
    "title": "Q176. What does the following code snippet do?",
    "text": undefined,
    "code2": "val cursor = db.rawQuery(\"SELECT * FROM users\", null)",
    "choices": [
      "1. Queries data from a table.",
      "2. Creates a table in the SQLite database.",
      "3. Inserts data into a table.",
      "4. Updates data in a table."
    ],
    "answer": "1. Queries data from a table."
  },
  {
    "id": 177,
    "title": "Q177. What does the following code snippet do?",
    "text": undefined,
    "code2": "val sql = \"UPDATE users SET username = 'Jane Doe' WHERE id = 1\"<br>db.execSQL(sql)",
    "choices": [
      "1. Updates data in a table.",
      "2. Creates a table in the SQLite database.",
      "3. Inserts data into a table.",
      "4. Queries data from a table."
    ],
    "answer": "1. Updates data in a table."
  },
  {
    "id": 178,
    "title": "Q178. What does the following code snippet do?",
    "text": undefined,
    "code2": "val sql = \"DELETE FROM users WHERE id = 1\"<br>db.execSQL(sql)",
    "choices": [
      "1. Deletes data from a table.",
      "2. Creates a table in the SQLite database.",
      "3. Inserts data into a table.",
      "4. Queries data from a table."
    ],
    "answer": "1. Deletes data from a table."
  },
  {
    "id": 179,
    "title": "Q179. What does the following code snippet do?",
    "text": undefined,
    "code2": "val client = OkHttpClient()",
    "choices": [
      "1. Creates an OkHttpClient instance.",
      "2. Performs an HTTP request.",
      "3. Parses a JSON response.",
      "4. Creates a new thread."
    ],
    "answer": "1. Creates an OkHttpClient instance."
  },
  {
    "id": 180,
    "title": "Q180. What does the following code snippet do?",
    "text": undefined,
    "code2": "val request = Request.Builder()<br>.url(\"https://api.example.com/data\")<br>.build()",
    "choices": [
      "1. Builds an HTTP request.",
      "2. Creates an OkHttpClient instance.",
      "3. Performs an HTTP request.",
      "4. Parses a JSON response."
    ],
    "answer": "1. Builds an HTTP request."
  },
  {
    "id": 181,
    "title": "Q181. What does the following code snippet do?",
    "text": undefined,
    "code2": "val call = client.newCall(request)<br>val response = call.execute()",
    "choices": [
      "1. Performs an HTTP request.",
      "2. Creates an OkHttpClient instance.",
      "3. Builds an HTTP request.",
      "4. Parses a JSON response."
    ],
    "answer": "1. Performs an HTTP request."
  },
  {
    "id": 182,
    "title": "Q182. What does the following code snippet do?",
    "text": undefined,
    "code2": "val responseBody = response.body<br>if (responseBody != null) {<br>val json = responseBody.string()<br>}",
    "choices": [
      "1. Parses a JSON response.",
      "2. Creates an OkHttpClient instance.",
      "3. Builds an HTTP request.",
      "4. Performs an HTTP request."
    ],
    "answer": "1. Parses a JSON response."
  },
  {
    "id": 183,
    "title": "Q183. What does the following code snippet do?",
    "text": undefined,
    "code2": "val gson = Gson()<br>val data = gson.fromJson(json, Data::class.java)",
    "choices": [
      "1. Deserializes a JSON string into an object.",
      "2. Creates an OkHttpClient instance.",
      "3. Builds an HTTP request.",
      "4. Performs an HTTP request."
    ],
    "answer": "1. Deserializes a JSON string into an object."
  },
  {
    "id": 184,
    "title": "Q184. What does the following code snippet do?",
    "text": undefined,
    "code2": "val service = Retrofit.Builder()<br>.baseUrl(\"https://api.example.com\")<br>.addConverterFactory(GsonConverterFactory.create())<br>.build()<br>.create(ApiService::class.java)",
    "choices": [
      "1. Creates a Retrofit instance and an API service.",
      "2. Performs an HTTP request.",
      "3. Deserializes a JSON string into an object.",
      "4. Builds an HTTP request."
    ],
    "answer": "1. Creates a Retrofit instance and an API service."
  },
  {
    "id": 185,
    "title": "Q185. What does the following code snippet do?",
    "text": undefined,
    "code2": "val call = service.getData()<br>call.enqueue(object : Callback<Data> {<br>override fun onResponse(call: Call<Data>, response: Response<Data>) {<br>// Handle successful response<br>}<br>override fun onFailure(call: Call<Data>, t: Throwable) {<br>// Handle error<br>}",
    "choices": [
      "1. Performs an HTTP request using Retrofit and handles the response.",
      "2. Creates a Retrofit instance and an API service.",
      "3. Deserializes a JSON string into an object.",
      "4. Builds an HTTP request."
    ],
    "answer": "1. Performs an HTTP request using Retrofit and handles the response."
  },
  {
    "id": 186,
    "title": "Q186. What does the following code snippet do?",
    "text": undefined,
    "code2": "val requestQueue = Volley.newRequestQueue(this)<br>val stringRequest = StringRequest(Request.Method.GET, \"https://api.example.com/data\",<br>Response.Listener { response -><br>// Handle successful response<br>},<br>Response.ErrorListener { error -><br>// Handle error<br>})<br>requestQueue.add(stringRequest)",
    "choices": [
      "1. Performs an HTTP request using Volley and handles the response.",
      "2. Creates a Retrofit instance and an API service.",
      "3. Deserializes a JSON string into an object.",
      "4. Builds an HTTP request."
    ],
    "answer": "1. Performs an HTTP request using Volley and handles the response."
  },
  {
    "id": 187,
    "title": "Q187. What does the following code snippet do?",
    "text": undefined,
    "code2": "val thread = Thread {<br>// Perform long-running task<br>}",
    "choices": [
      "1. Creates a new thread.",
      "2. Performs a long-running task on the main thread.",
      "3. Performs a long-running task on a background thread.",
      "4. Launches a coroutine."
    ],
    "answer": "1. Creates a new thread."
  },
  {
    "id": 188,
    "title": "Q188. What does the following code snippet do?",
    "text": undefined,
    "code2": "thread.start()",
    "choices": [
      "1. Starts the thread.",
      "2. Creates a new thread.",
      "3. Stops the thread.",
      "4. Pauses the thread."
    ],
    "answer": "1. Starts the thread."
  },
  {
    "id": 189,
    "title": "Q189. What does the following code snippet do?",
    "text": undefined,
    "code2": "val task = object : AsyncTask<Void, Void, String>() {<br>override fun doInBackground(vararg params: Void?): String {<br>// Perform long-running task<br>}<br>override fun onPostExecute(result: String) {<br>// Update UI with result<br>}",
    "choices": [
      "1. Creates an AsyncTask to perform a long-running task on a background thread and update the UI on the main thread.",
      "2. Creates a new thread.",
      "3. Launches a coroutine.",
      "4. Performs a long-running task on the main thread."
    ],
    "answer": "1. Creates an AsyncTask to perform a long-running task on a background thread and update the UI on the main thread."
  },
  {
    "id": 190,
    "title": "Q190. What does the following code snippet do?",
    "text": undefined,
    "code2": "task.execute()",
    "choices": [
      "1. Executes the AsyncTask.",
      "2. Creates an AsyncTask.",
      "3. Stops the AsyncTask.",
      "4. Cancels the AsyncTask."
    ],
    "answer": "1. Executes the AsyncTask."
  },
  {
    "id": 191,
    "title": "Q191. What does the following code snippet do?",
    "text": undefined,
    "code2": "val handlerThread = HandlerThread(\"MyHandlerThread\")<br>handlerThread.start()<br>val handler = Handler(handlerThread.looper)",
    "choices": [
      "1. Creates a HandlerThread and a Handler to handle messages on a background thread.",
      "2. Creates a new thread.",
      "3. Launches a coroutine.",
      "4. Performs a long-running task on the main thread."
    ],
    "answer": "1. Creates a HandlerThread and a Handler to handle messages on a background thread."
  },
  {
    "id": 192,
    "title": "Q192. What does the following code snippet do?",
    "text": undefined,
    "code2": "handler.post {<br>// Perform task on the background thread<br>}",
    "choices": [
      "1. Posts a task to be executed on the background thread.",
      "2. Creates a HandlerThread and a Handler.",
      "3. Creates a new thread.",
      "4. Launches a coroutine."
    ],
    "answer": "1. Posts a task to be executed on the background thread."
  },
  {
    "id": 193,
    "title": "Q193. What does the following code snippet do?",
    "text": undefined,
    "code2": "val scope = CoroutineScope(Dispatchers.IO)<br>scope.launch {<br>// Perform a long-running task<br>}",
    "choices": [
      "1. Launches a coroutine on the I/O dispatcher for background tasks.",
      "2. Creates a new thread.",
      "3. Creates an AsyncTask.",
      "4. Performs a long-running task on the main thread."
    ],
    "answer": "1. Launches a coroutine on the I/O dispatcher for background tasks."
  },
  {
    "id": 194,
    "title": "Q194. What does the following code snippet do?",
    "text": undefined,
    "code2": "val job = scope.launch {<br>// Perform a long-running task<br>}",
    "choices": [
      "1. Launches a coroutine and returns a Job object to manage the coroutine.",
      "2. Creates a new thread.",
      "3. Creates an AsyncTask.",
      "4. Performs a long-running task on the main thread."
    ],
    "answer": "1. Launches a coroutine and returns a Job object to manage the coroutine."
  },
];

// let cppq1 = cpp[Math.floor(Math.random())* cpp.length+9];
// // console.log(cppq1);

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
// 	if (request.message === "getRandomQuestion") {
// 		const randomQuestion = cpp[Math.floor(Math.random()) * cpp.length ];

// 		sendResponse([randomQuestion]);
// 		console.log("Sending response for question:", randomQuestion);
// 	}
// });

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
// 	if (request.message === "getRandomQuestion") {
// 		console.log("Received getRandomQuestion message");

// 		let millisecs = Date.now();
// 		console.log(millisecs);

// 		if (millisecs % 6 == 0 || millisecs % 7 == 0) {
// 			const randomQuestion = cpp[Math.floor(Math.random() * cpp.length)];

// 			console.log("Sending response for question:", randomQuestion);
// 			sendResponse([randomQuestion]);
// 		}

// 		if (millisecs % 8 == 0 || millisecs % 9 == 0) {
// 			const randomQuestion = dsa3[Math.floor(Math.random() * cpp.length)];

// 			console.log("Sending response for question:", randomQuestion);
// 			sendResponse([randomQuestion]);
// 		}

// 		if (millisecs % 2 == 1 || millisecs % 3 == 3 || millisecs % 3 == 0) {
// 			const randomQuestion = ds[Math.floor(Math.random() * cpp.length)];

// 			console.log("Sending response for question:", randomQuestion);
// 			sendResponse([randomQuestion]);
// 		} else {
// 			const randomQuestion = cpp[Math.floor(Math.random() * cpp.length)];

// 			console.log("Sending response for question:", randomQuestion);
// 			sendResponse([randomQuestion]);
// 		}
// 	}
// });

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
// 	if (request.message === "getRandomQuestion") {
// 		console.log("Received getRandomQuestion message");
// 		const millisecs = Date.now();
// 		console.log(millisecs);
// 		if (millisecs % 6 == 0 || millisecs % 7 == 0) {
// 			const randomQuestion =
// 				kotlin1[Math.floor(Math.random() * kotlin1.length)];
// 			console.log("Sending response for question:", randomQuestion);
// 			sendResponse([randomQuestion]);
// 		}

// 		if (millisecs % 8 == 0 || millisecs % 9 == 0) {
// 			const randomQuestion =
// 				kotlin2[Math.floor(Math.random() * kotlin2.length)];
// 			console.log("Sending response for question:", randomQuestion);
// 			sendResponse([randomQuestion]);
// 		}
// 		if (millisecs % 5 == 0 || millisecs % 11 == 0) {
// 			const randomQuestion =
// 				kotlinOops[Math.floor(Math.random() * kotlinOops.length)];
// 			console.log("Sending response for question:", randomQuestion);
// 			sendResponse([randomQuestion]);
// 		}

// 		if (millisecs % 4 == 0 || millisecs % 15 == 0) {
// 			const randomQuestion =
// 				jetpackCompose[Math.floor(Math.random() * jetpackCompose.length)];
// 			console.log("Sending response for question:", randomQuestion);
// 			sendResponse([randomQuestion]);
// 		}
// 		if (millisecs % 10 == 0 || millisecs % 11 == 0) {
// 			const randomQuestion =
// 				AndroidBasics[Math.floor(Math.random() * AndroidBasics.length)];
// 			console.log("Sending response for question:", randomQuestion);
// 			sendResponse([randomQuestion]);
// 		}
// 	}
// });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.message === "getRandomQuestion") {
		console.log("Received getRandomQuestion message");

		// Create an array of all the question sets
		const questionSets = [
			kotlin1,         // 0
			kotlin2,         // 1
			kotlinOops,      // 2
			jetpackCompose,  // 3
			AndroidBasics    // 4
		];

		// Pick a random question set
		const randomSetIndex = Math.floor(Math.random() * questionSets.length);
		const randomQuestionSet = questionSets[randomSetIndex];

		// Pick a random question from the chosen set
		const randomQuestion = randomQuestionSet[Math.floor(Math.random() * randomQuestionSet.length)];

		console.log("Sending response for question:", randomQuestion);

		// Send the random question as the response
		sendResponse([randomQuestion]);
	}
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.type === "change_quiz") {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, request, (response) => {
				sendResponse(response);
			});
		});
		return true; // Keep the message channel open for sendResponse
	}
});
