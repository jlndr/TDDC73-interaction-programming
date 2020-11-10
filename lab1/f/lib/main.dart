import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Lab1',
        theme: ThemeData(
          primarySwatch: Colors.teal,
          visualDensity: VisualDensity.adaptivePlatformDensity,
        ),
        home: Scaffold(
          appBar: AppBar(
            title: Text("Example 1"),
          ),
          body: ContentPage(),
        ));
  }
}

class ContentPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Material(
      child: ListView(children: <Widget>[
        Image(height: 240, image: AssetImage('./babu.jpg')),
        Column(children: <Widget>[
          NiceButtonRow(),
          SizedBox(height: 25),
          NiceButtonRow(),
          SizedBox(height: 25),
          EmailWidget(),
          SizedBox(height: 10),
        ]),
      ]),
    );
  }
}

class NiceButtonRow extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: <FlatButton>[
        FlatButton(
          onPressed: () => {},
          color: Colors.grey[400],
          child: Text("BUTTON"),
        ),
        FlatButton(
          onPressed: () => {},
          color: Colors.grey[400],
          child: Text("BUTTON"),
        ),
      ],
    );
  }
}

class EmailWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: <Widget>[
        SizedBox(width: 15),
        Text(
          "Email",
          style: TextStyle(color: Colors.grey[500], fontSize: 20),
        ),
        SizedBox(width: 75),
        Expanded(
          child: TextField(
            cursorHeight: 30,
            cursorColor: Colors.pink[400],
            decoration: InputDecoration(
              enabledBorder: UnderlineInputBorder(
                  borderSide: BorderSide(width: 2.0, color: Colors.pink[400])),
              focusedBorder: UnderlineInputBorder(
                  borderSide: BorderSide(width: 2.0, color: Colors.pink[400])),
            ),
            textAlignVertical: TextAlignVertical.bottom,
          ),
        ),
        SizedBox(width: 50)
      ],
    );
  }
}
