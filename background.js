let cpp = [
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

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.message === "getRandomQuestion") {
		console.log("Received getRandomQuestion message");
		const randomQuestion = cpp[Math.floor(Math.random() * cpp.length)];
		console.log("Sending response for question:", randomQuestion);
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
